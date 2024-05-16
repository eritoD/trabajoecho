

const settings = {
     async: true,
     crossDomain: true,
     url: 'https://yahoo-weather5.p.rapidapi.com/weather?location=punta%20arena&format=json&u=c',
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': 'c93daf93b2msh09a39a66c8e3902p1dbdcfjsn0a02a09d3934',
         'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
     }
 };

 $.ajax(settings).done(function (response) {
     console.log(response[0]);
     $("#cosas").ready(response)

     $.each(response, function(i,item){
        $("#cosas").append(item.current_observation);
     });



 });


