$(document).ready(function() {
    // document.getElementById("main-block").style.display = "none";
    // document.getElementById("asignatura").style.display = "none";
    // document.getElementById("calificaciones").style.display = "none";
    // document.getElementById("contacto").style.display = "none";
    // document.getElementById("estudiantes").style.display = "none";
    // document.getElementById("faq").style.display = "none";
    // document.getElementById("foro").style.display = "none";
    // document.getElementById("main-header").style.display = "none";
    var login = getCookie("login");
    if (!login || login == "") {
        document.getElementsByClassName("container")[0].style.display = "block";
    } else {
        document.getElementById("main-header").style.display = "block";
        document.getElementsByClassName("contenedor")[0].style.display = "grid";
        document.getElementById("main-block").style.display = "block";
    }
});

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
btn.onclick = function() {
    modal.style.display = "block";
}

$('select[name ="rol"]').change(function() {
    var rol = $(this).val();
    if (rol == 'estudiante') {
        document.getElementById("student-form").style.display = "block";
    } else {
        document.getElementById("student-form").style.display = "none";
    }
})

//JS CALENDAR CODE
$(function() {
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
        onInit: function(calendar) {},
        onMonthChange: function(month, year) {},
        onDateSelect: function(date, events) {}
    });
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//JS COOKIES CODE 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cemail) {
    var user = getCookie(cemail); //devuelve el valor del nombre de usuario
    if (user != "") { //si no es vacio
        return true;
    } else { //en otro caso
        return false;
    }
}

// INICIAR SESION
$(function() {
    $(".btn-signin").click(function() {
        var cmail = document.getElementsByClassName("form-styling")[0].value;
        if (!checkCookie(cmail)) {
            alert("No hay ninguna cuenta asociada a este email.");
            return;
        }


        var user = getCookieUser(cmail);
        document.getElementById("user").textContent = "Bienvenido, " + user;

        document.getElementsByClassName("form-signin")[0].reset();


        setCookie("login", true, 30);
        document.getElementsByClassName("container")[0].style.display = "none";
        document.getElementById("main-header").style.display = "block";
        document.getElementsByClassName("contenedor")[0].style.display = "grid";
        document.getElementById("main-block").style.display = "block";
    });
});

$(function() {
    $("#logout").click(function() {
        document.getElementsByClassName("container")[0].style.display = "block";
        document.getElementById("main-header").style.display = "none";
        document.getElementsByClassName("contenedor")[0].style.display = "none";
    });
});

// REGISTRARSE
$(function() {
    $(".btn-signup").click(function() {
        var cuser = document.getElementsByClassName("form-styling")[2].value;
        var cnia = document.getElementsByClassName("form-styling")[3].value;
        var cpsw = document.getElementsByClassName("form-styling")[4].value;
        var cname = document.getElementsByClassName("form-styling")[5].value;
        var cmail = document.getElementsByClassName("form-styling")[6].value;
        var cdate = document.getElementsByClassName("form-styling")[7].value;
        var cdni = document.getElementsByClassName("form-styling")[8].value;
        var crol = document.getElementsByClassName("form-styling")[9].value;
        var cdegree = document.getElementsByClassName("form-styling")[10].value;
        var clanguage = document.getElementsByClassName("form-styling")[11].value;
        var cuniversity = document.getElementsByClassName("form-styling")[12].value;

        if (cuser == "" || cnia == "" || cpsw == "" || cname == "" || cmail == "" || cdate == "" || cdni == "" || crol == "" || clanguage == "") {
            alert("FALTAN CAMPOS POR RELLENAR");
            return;
        }

        if (crol == " -- Selecciona un rol -- ") {
            alert("SELECCIONA UN ROL");
            return;
        }

        if (clanguage == " -- Selecciona un idioma -- ") {
            alert("SELECCIONA UN IDIOMA");
            return;
        }

        if (crol == "estudiante" && cdegree == " -- Selecciona un grado -- ") {
            alert("SELECCIONA UN GRADO");
            return;
        }

        var pattern = /^100+[0-9]{6}$/;
        if (!pattern.test(cnia)) {
            alert("EL NIA NO SIGUE EL PATRON 100XXXXXX");
            return;
        }

        pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
        if (!pattern.test(cmail)) {
            alert("COMPRUEBA QUE EL EMAIL QUE HAS INTRODUCIDO EXISTE");
            return;
        }

        pattern = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/
        if (!pattern.test(cdate)) {
            alert("INTRODUCE UNA FECHA CON EL FORMATO dd/mm/aaaa");
            return;
        }

        if (checkCookie(cmail)) {
            alert("Ya hay un correo asociado a esta cuenta.");
            return;
        }

        document.getElementsByClassName("form-signup")[0].reset();


        var cvalue = cuser + "*" + cnia + "*" + cpsw + "*" + cname + "*" + cmail + "*" + cdate + "*" + cdni + "*" + crol + "*" + cdegree + "*" + clanguage + "*" + cuniversity;
        setCookie(cmail, cvalue, 30);

        intercambiarPaneles();

        alert("Has sido registrado correctamente. Simplemente inicia sesión para poder utilizar tu cuenta");

        // document.getElementsByClassName("container")[0].style.display = "none";
        // document.getElementById("main-header").style.display = "block";
        // document.getElementsByClassName("contenedor")[0].style.display = "grid";
    });
});

function getCookieUser(cmail) {
    var c = getCookie(cmail);
    var ca = c.split('*');
    return ca[0];
}

function intercambiarPaneles() {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
}

$(function() {
    $(".btn").click(intercambiarPaneles);
});