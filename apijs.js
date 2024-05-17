const settings = {
	async: true,
	crossDomain: true,
	url: 'https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=Grand%20Theft%20Auto&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6bfbe18aa7msh199419cf596f99dp17890fjsn328109e38b6e',
		'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

    $.each(response, function(i, item){
        $("#cosas").append(
            `<div class="box">
                <img src="${item.thumb}" alt="">
                <div class="product-txt">
                    <h3>${item.title}</h3>
                    <p>calidad premium</p>
                    <p class="precio">${item.normalPrice}</p>
                    <a href="#" class="agregar-carrito btn-3" data-id="3">Agregar al carrito</a>
                </div>
                </div>`                          

        );
    });
});
 
//carro de compras 



