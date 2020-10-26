function showElement(id) {
  document.getElementById("main-block").style.display = "none";
  document.getElementById("asignatura").style.display = "none";
  document.getElementById("calificaciones").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  document.getElementById("estudiantes").style.display = "none";
  document.getElementById("faq").style.display = "none";
  document.getElementById("foro").style.display = "none";
  document.getElementById(id).style.display = "block";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}


$(function () {
  $(".calendar").simpleCalendar({
    // displays events
    displayEvent: true,
    displayYear: true,
    // event dates
    events: [
      // generate new event after tomorrow for one hour
      {
        startDate: new Date(Date.parse(document.getElementById('ev1-date').textContent)),
        endDate: new Date(Date.parse(document.getElementById('ev1-date').textContent)),
        summary: document.getElementById('ev1').innerText
      },
      // generate new event for yesterday at noon
      {
        startDate: new Date(Date.parse(document.getElementById('ev2-date').textContent)),
        endDate: new Date(Date.parse(document.getElementById('ev2-date').textContent)),
        summary: document.getElementById('ev2').innerText
      },
      // generate new event for the last two days
      {
        startDate: new Date(Date.parse(document.getElementById('ev3-date').textContent)),
        endDate: new Date(Date.parse(document.getElementById('ev3-date').textContent)),
        summary: document.getElementById('ev3').innerText
      }
    ],
    disableEventDetails: false,
    disableEmptyDetails: false,
    months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    days: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'],
    displayYear: true,
    fixedStartDay: true,
    onInit: function (calendar) { },
    onMonthChange: function (month, year) { },
    onDateSelect: function (date, events) { }
  });
});


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}