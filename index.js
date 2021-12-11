var dayofweek = ['sun', 'mon', 'tus', 'wed', 'thus', 'fri', 'sat'];
//month count
var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


function clock() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();


    var day = h < 11 ? 'AM' : 'PM';  //am or pm count
    var daytoday = today.getDay();   //day
    var date = today.getDate();     //date
    var mon = today.getMonth();     //month
    var year = today.getFullYear();  //year


    h = h < 10 ? '0' + h : h;    //hours setting
    m = m < 10 ? '0' + m : m;   //minutes setting
    s = s < 10 ? '0' + s : s;   //second setting


    //wrting it doen in the document
    document.getElementById('hours').innerText = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year;
    document.getElementById('' + dayofweek[daytoday] + '').style.color = '#fff';


}

var ivert = setInterval(clock, 1000);
