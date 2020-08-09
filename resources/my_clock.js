
function clock(){

    var myDate = new Date();

    //time 
    var h = myDate.getHours();
        if(h < 10){
            h = "0" + h;
        }else{
            h = h;
        }

    var m = myDate.getMinutes();
        if(m < 10){
            m = "0" + m;
        }else{
            m = m;
        }
        
    var s = myDate.getSeconds();
        if(s < 10){
            s = "0" + s;
        }else{
            s = s;
        }

    document.getElementById('hour').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s; 
    //time ends
   
    //day 
    var y = myDate.getFullYear();
    var d = myDate.getDay();
    var m = myDate.getMonth();
    var dm = myDate.getDate();
        if (dm < 10){
            dm = "0" + dm;
        }else{
            dm = dm;
        }
    
    var dayArray = new Array("Sun","Mon","Tues","Wed","Thur","Fri","Sat");
    var monthArray = new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");

    document.getElementById("day").innerHTML = dayArray[d];
    document.getElementById("month").innerHTML = monthArray[m];
    document.getElementById("number").innerHTML =  dm;
    document.getElementById("year").innerHTML = y;
    //day ends
    
}

var interval = setInterval(clock, 1000);         

           