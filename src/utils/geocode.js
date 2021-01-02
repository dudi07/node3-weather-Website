const request = require("request");
const geocode = (address , callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZHVkaXNhbmpheSIsImEiOiJja2ozOW9ibnIwOHJ4MnNvOTc1OG9xMjhpIn0.APBO8FAXFcNVncnWT7dExQ&limit=1" ;
    request({url , json:true} , (error , {body})=>{
        if (error){
            callback('unable to connect to the server' , undefined);
        }
        else if(body.features.length === 0){
            callback('unable to find the location ' , undefined);
        }
        else{
            callback(undefined , {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode