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
            window.location.href = `../HTML/ALUMNO/formreservas.html?fecha=${info.dateStr}`;
        },

        events: [
            {
                title: 'Clase Inglés',
                start: '2026-02-05'
            },
            {
                title: 'Examen Ubicación',
                start: '2026-02-10'
            }
        ]
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
