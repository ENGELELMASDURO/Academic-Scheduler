  document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        height: '100%',

         headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: ''
},

 
        selectable: true,
        navLinks: true,

        dateClick: function(info) {
            // Redirige al formulario de reserva con fecha seleccionada
            window.location.href = `formreservas.html?fecha=${info.dateStr}`;
        },

     events: function(fetchInfo, successCallback, failureCallback) {

    let reservas = JSON.parse(localStorage.getItem("reservasAlumno")) || [];

    successCallback(reservas);
}
    });

    calendar.render();

    // BOTONES DE VISTA
    document.getElementById('viewMonth').addEventListener('click', function () {
        calendar.changeView('dayGridMonth');
    });

    document.getElementById('viewWeek').addEventListener('click', function () {
        calendar.changeView('timeGridWeek');
    });

    document.getElementById('viewDay').addEventListener('click', function () {
        calendar.changeView('timeGridDay');
    });

    document.getElementById('viewList').addEventListener('click', function () {
        calendar.changeView('listMonth');
    });

});
 