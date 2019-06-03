// to display default wishes
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greet;

  if (hrs < 12){
    greet = 'Good Morning,';
  }
  else if (hrs >= 12 && hrs <= 17){
    greet = 'Good Afternoon,';
  }
  else if (hrs >= 17 && hrs <= 20){
    greet = 'Good Evening,';
  }
  else if (hrs >= 20 && hrs <= 24){
  greet = 'Good night,';
  }
  document.getElementById('Greetings').innerHTML = "<br>"+greet +"<br>"+ 'User';


// to display month
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var now = new Date();
  var thisMonth = months[now.getMonth()];
  document.getElementById('month');

  if(month.textContent !== undefined) 
  {
    month.textContent = thisMonth;
  }
  else 
  {
    month.innerText = thisMonth;
  }

// to display week
  var dt = new Date(); 
  var weekday = new Array('Sun', 'Mon', 'Tue','Wed', 'Thur', 'Fri', 'Sat');
  document.getElementById('week').innerHTML =  weekday[dt.getDay()];

// to get date
 var dates= new Date();
 var dateNum = dates.getDate();
 document.getElementById("date").innerHTML = dateNum;

 var years= new Date();
 var  year= years.getFullYear();
 document.getElementById("year").innerHTML = year;

 var time = new Date();
 document.getElementById("time").innerHTML = (("0"+time.getHours()).slice(-2)) +":"+ (("0"+time.getMinutes()).slice(-2)) 
     +":"+ (("0"+time.getSeconds()).slice(-2));

  var mytime = new Date();
  var hours = mytime.getHours();
  var noon;
  if (hrs < 12){
    noon = 'am';
  }
  else if (hrs >= 12 && hrs <= 24){
    noon = 'pm';
  }
   document.getElementById('daycheck').innerHTML = noon;

// to display Calendar
function displayCalendar()
{
  var htmlContent ="";
  var FebNumberOfDays ="";
  var counter = 1;
  var dateNow = new Date();
  var month = dateNow.getMonth();
  var nextMonth = month+1;
  var prevMonth = month-1;
  var day = dateNow.getDate();
  var year = dateNow.getFullYear();
//Determing if February
  if (month == 1)
  {
    if ( (year%100!=0) && (year%4==0) || (year%400==0))
    {
      FebNumberOfDays = 29;
    }
    else
    {
      FebNumberOfDays = 28;
    }
  }
// names of months and week days.
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
  var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
// days in previous month and next one , and day of week.
  var nextDate = new Date(nextMonth +' 1 ,'+year);
  var weekdays= nextDate.getDay();
  var weekdays2 = weekdays
  var numOfDays = dayPerMonth[month];
// this leave a white space for days of pervious month.
while (weekdays>0)
{
  htmlContent += "<td class='monthPre'></td>";
// used in next loop.
  weekdays--;
}
// loop to build the calander body.
  while (counter <= numOfDays)
{
// When to start new line.
  if (weekdays2 > 6)
  {
    weekdays2 = 0;
    htmlContent += "</tr><tr>";
  }
// if counter is current day.
// highlight current day using the CSS defined in header.
  if (counter == day)
  {
    htmlContent +="<td class='dayNow'>"+counter+"</td>";
  }else
  {
    htmlContent +="<td class='monthNow'>"+counter+"</td>";    
  }
  weekdays2++;
  counter++;
}
// building the calendar html body.
  var calendarBody = "<table class='calendar'><tr class='monthNow'><th colspan='7'>"+monthNames[month]+" "+ year +"</th></tr>";
      calendarBody +="<tr class='dayNames'><td>M</td>  <td>T</td> <td>W</td>"+"<td>T</td> <td>F</td> <td>S</td> <td>S</td></tr>";
      calendarBody += "<tr>";
      calendarBody += htmlContent;
      calendarBody += "</tr></table>";
  document.getElementById("calendar").innerHTML=calendarBody;
}