var deadline=new Date("July 27 , 2020 12:43:00").getTime();
var x=setInterval(function(){
    var  now = new Date().getTime();
    var t = deadline-now;
    var days=Math.floor(t/(1000*60*60*24));
    var hours=Math.floor((t%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((t%(1000*60*60))/(1000*60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("day").innerHTML= (days < 10) ? ('0' + days) : days;
    document.getElementById("hour").innerHTML = (hours < 10) ? ('0' + hours) : hours; 
    document.getElementById("minute").innerHTML = (minutes < 10) ? ('0' + minutes) : minutes;
    document.getElementById("second").innerHTML = (seconds < 10) ? ('0' + seconds) : seconds;
    if (t < 0) { 
		clearInterval(x); 
		document.getElementById("demo").innerHTML = "TIME UP"; 
		document.getElementById("day").innerHTML ='00'; 
		document.getElementById("hour").innerHTML ='00'; 
		document.getElementById("minute").innerHTML ='00' ; 
		document.getElementById("second").innerHTML = '00'; } 
}, 1000); 