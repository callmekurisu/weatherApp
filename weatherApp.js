$(document).ready(function() {
  
  $("#row1").css("background-color", "#FFF");
  //get location with ip tracker
 $.getJSON("http://ip-api.com/json", function (json) {
  var city = json.city;  
$(".cityTop").html(" "+city);
   //feed city data to Open Weather API
   var url = "http://api.openweathermap.org/data/2.5/weather?q={"+city+"&APPID=ee0f8c4bdc2cf304969529c2d7f73fce";
    
   $.getJSON(url, function (json) {
   //F = 9/5(K - 273) + 32...convert to  degrees kelvin
    var temp = Math.floor(JSON.stringify(json.main.temp - 273)*9/5 + 32) + "&#176;" + "F";
    var tempCel = Math.floor(JSON.stringify(json.main.temp - 273)) + "&#176;" + "C";
    $(".temp1").html("");
     //create buttons that switch from Celsius to Fahrenheit
     $("#tempSwitchF").on("click", function(){
      if($(".temp1").html(temp)!=temp){
        $(".temp1").html(temp);  
      }  
       location.reload();
    })
     $("#tempSwitchC").on("click", function(){
      if($(".temp1").html(temp)!=tempCel){
        $(".temp1").html(tempCel);  
      }  
       location.reload();
    })
    
    //grab icon from Open Weather webpage
    var condition = JSON.stringify(json.weather[0].icon);
    
     var iconCode = [];
     for(i=0;i<condition.length;i++){
      if(condition[i] !== '"'){
       iconCode.push(condition[i]); 
      }
       
    }
     var iconFinal = iconCode.join("");
     var source = "http://openweathermap.org/img/w/" + iconFinal + ".png";
     $(".icon1").html("<img src="+source+"></img>")
 
  });
 }); 
  $("#tempSwitchF").css("background-color", "#111");
  $("#tempSwitchC").css("background-color", "#111");
  
});
