const settings = {
	async: true,
	crossDomain: true,
	url: 'https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=lego&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c93daf93b2msh09a39a66c8e3902p1dbdcfjsn0a02a09d3934',
		'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

    $.each(response, function(i, item){
        $("#cosas").append(
            `                            
            <div class="img-card iCard-style3">
                <div class="card-content">
                    <div class="card-image">
                        <span id="tilte" class="card-title">${item.title}</span>
                        <img src="${item.thumb}"/>
                    </div>
                    
                    <div class="card-text">
                        <p>
                            ${item.metacriticLink}
                        </p>
                    </div>
                   <a href="#"> <button class="btn btn-info">Ver IDMB</button></a>
                    
                </div> 
        
                
            </div>`
        );
    });
});
