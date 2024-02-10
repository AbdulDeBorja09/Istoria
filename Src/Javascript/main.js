function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("time").textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

var currentDate = new Date();

// Get the day, month, and year
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero based
var year = currentDate.getFullYear();

// Format the date as desired (e.g., DD-MM-YYYY)
var formattedDate = day + "/" + month + "/" + year;

// Display the formatted date in the specified HTML element
document.getElementById("currentDate").innerHTML = formattedDate;

