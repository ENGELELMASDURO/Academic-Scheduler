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

        navLinks: true,

        // Cuando el docente hace click en una reserva existente
 eventClick: function(info) {

    const alumno = info.event.extendedProps.alumno;
    const fecha = info.event.startStr;
    const hora = info.event.extendedProps.hora;
    const id = info.event.id;

    window.location.href = `formgestionalumno.html?id=${id}&alumno=${alumno}&fecha=${fecha}&hora=${hora}`;
},

         events: function(fetchInfo, successCallback, failureCallback) {

    let reservas = JSON.parse(localStorage.getItem("reservasAlumno")) || [];

    // Transformar para que el docente vea nombre del alumno
    let eventosDocente = reservas.map((r, index) => {
        return {
            id: index,
            title: r.title,
            start: r.start,
            end: r.end,
            alumno: r.alumno || "Alumno",
            hora: r.start.split("T")[1]
        }
    });

    successCallback(eventosDocente);
}
    });

    calendar.render();

    // Botones de vista
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
 