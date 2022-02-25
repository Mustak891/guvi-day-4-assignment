let mlm = new XMLHttpRequest();
mlm.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
mlm.send();
mlm.onload = function(){
    let krk= JSON.parse(mlm.response);
    for(let i=0; i<krk.length; i++){
        console.log(`name: ${krk[i].name} region: ${krk[i].region} sub region: ${krk[i].subregion} population: ${krk[i].population}`);
    }


}