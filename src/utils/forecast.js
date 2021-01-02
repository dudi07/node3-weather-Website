const request = require("request");

const forecast = (latitude , longitude , callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=cec20582aa474016e89a48d22762dc83&query=' + latitude+","+longitude+'&units=f';
    request({url:url , json:true} , (error , {body})=>{

        if(error){
            callback('unable to connect to the server' , undefined);
        }
        else if(body.error){
            callback('unable to find the location ' , undefined);
        }
        else{
            callback(undefined , body.current.weather_descriptions[0] + body.current.temperature + ' is the temprature and it feels like ' + body.current.feelslike)
            
        }
    

    });

    

}

module.exports = forecast