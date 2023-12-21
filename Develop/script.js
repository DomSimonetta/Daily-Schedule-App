var timeDisplayEl = $('#currentDay');
var currentTimeEl = $('#currentTime')
var futureTime = $('#futuretime');
var pastTime = $('#pasttime');

  function readHoursFromStorage() {
    var hours = localStorage.getItem('hours');
    if (hours) {
      hours = JSON.parse(hours);
    } else {
      hours = [];
    }
    return hours;
  }

  function saveHoursToStorage(hours) {
    localStorage.setItem('hours', JSON.stringify(hours));
  }

  function printHourData() {
    hourDisplayEl.empty();
    var hours = readHoursFromStorage();
  }
 
function checkTime() {
  var past = dayjs().format(h < currentTimeEl)
  var present = dayjs().format(h === currentTimeEl)
  var future = dayjs().format(h > currentTimeEl)
  if(past){
    
  }
}

 function displayTime() {
    var rightNow = dayjs().format('dddd, MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
  var today = dayjs().startOf('day');

displayTime();
setInterval(displayTime, 1000);
readHoursFromStorage();