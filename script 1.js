let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    let dat= JSON.parse(request.response);
    for(let i=0;i<dat.length;i++){
        console.log(`flag: ${dat[i].flag}`);
       
}}
