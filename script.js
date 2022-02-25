/*console.log("mustak");*/
// step 01: create an XHR object
var request=new XMLHttpRequest();
//step 02: request a connection(which data you need to receive)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03: sending a connection request
request.send();
//step 04: once the data sucessfully recived 
//from the sever(200)
request.onload=function(){
    var data =JSON.parse(request.response);
    console.log(data);

    for(let i=0; i<data.length; i++){
        //console.log(data[i].name);
        //console.log(`flag: ${data[i].flag}`)
        console.log(`name: ${data[i].name} lat ${data[i].latlng[0]} long ${data[i].latlng[1]}`)
    }
    
}
