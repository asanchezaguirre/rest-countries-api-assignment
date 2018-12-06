var request = superagent;



function makeRequest(url){
        request
        .get(url)
        .then((res)=> {
        result = res.body;
        
        result.forEach(function(element){
        var nombrePais = element.name;
        var capital = element.capital;   
        var flag = element.flag;
      
      
      document.querySelector(".countries-container").innerHTML += '<div class="country-card"><img class="country-flag" src="'+ flag +'" alt="flag"><h4 class="country-name">'+ nombrePais +'</h4><p class="country-capital">' + capital +'</p></div>' 
   
    });

    })

  }
    
    makeRequest('https://restcountries.eu/rest/v2/all')
