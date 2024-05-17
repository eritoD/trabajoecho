const settings = {
	async: true,
	crossDomain: true,
	url: 'https://pokemon-go1.p.rapidapi.com/type_effectiveness.json',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c93daf93b2msh09a39a66c8e3902p1dbdcfjsn0a02a09d3934',
		'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

    $.each(response, function(i, item){
        $("#cosas").append(
            '<div class="swiper-slide">' +
                '<div class="product">' +
                    '<div class="product-img">' +
                        '<h4>' + item.bug + '</h4>' +
                        '<img src="images/food1.png" alt="">' +
                    '</div>' +
                    '<div class="product-txt">' +
                        '<h4>'+item.dark+'</h4>' +
                        '<p>calidad premium</p>' +
                        '<span class="price">$80.00</span>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    });
});



    //     $("#movie").append(`         <div class="img-card iCard-style3">
    //             <div class="card-content">
    //                 <div class="card-image">
    //                     <span id="tilte" class="card-title">${item.title}</span>
    //                     <img src="${item.image}"/>
    //                 </div>
                    
    //                 <div class="card-text">
    //                     <p>
    //                         ${item.description}
    //                     </p>
    //                 </div>
    //                <a href="${item.imdb_link}"> <button class="btn btn-info">Ver IDMB</button></a>
                    
    //             </div> `)
    // })
