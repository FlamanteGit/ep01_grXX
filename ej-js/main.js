function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("logo").src = "../ej-images/mini_Logo_UC3M.svg.png";
    } else {
        document.getElementById("logo").src = "../ej-images/uc3m.png";
    }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

$(document).ready(function() {
    loadAll();
});

function loadAll() {
    cargaPagina();
    selectProfilePhoto();
    specificContent();
}

//funcion encargada de mostrar el contenido que corresponde a cada rol
function specificContent() {
    var logedRol = getRolLogedUser();
    if (logedRol == "estudiante") {
        document.getElementById('estudiantes-link').style.display = "none";
        document.getElementById('mis-asignaturas-link').style.display = "block";
        document.getElementById('calificaciones-link').style.display = "none";
        document.getElementById('calificaciones-alumnos-link').style.display = "block";
        document.getElementById('estudiantes-link-burguer').style.display = "none";
        document.getElementById('mis-asignaturas-link-burguer').style.display = "block";
        document.getElementById('calificaciones-link-burguer').style.display = "none";
        document.getElementById('add-new-asignatura').style.display = "none";
        document.getElementById('calificaciones-alumnos-link-burguer').style.display = "block";
        for (let index = 0; index < document.getElementsByClassName('delete-button').length; index++) {
            document.getElementsByClassName('delete-button')[index].style.display = "none";
        }
    } else if (logedRol == "profesor") {
        document.getElementById('mis-asignaturas-link').style.display = "none";
        document.getElementById('estudiantes-link').style.display = "block";
        document.getElementById('calificaciones-link').style.display = "block";
        document.getElementById('calificaciones-alumnos-link').style.display = "none";
        document.getElementById('mis-asignaturas-link-burguer').style.display = "none";
        document.getElementById('estudiantes-link-burguer').style.display = "block";
        document.getElementById('calificaciones-link-burguer').style.display = "block";
        document.getElementById('add-new-asignatura').style.display = "none";
        document.getElementById('calificaciones-alumnos-link-burguer').style.display = "none";
        for (let index = 0; index < document.getElementsByClassName('add-new-tema').length; index++) {
            document.getElementsByClassName('add-new-tema')[index].style.display = "inline-block";
        }
        for (let index = 0; index < document.getElementsByClassName('delete-button').length; index++) {
            document.getElementsByClassName('delete-button')[index].style.display = "none";
        }
    } else {
        document.getElementById('mis-asignaturas-link').style.display = "none";
        document.getElementById('estudiantes-link').style.display = "block";
        document.getElementById('calificaciones-link').style.display = "block";
        document.getElementById('calificaciones-alumnos-link').style.display = "none";
        document.getElementById('mis-asignaturas-link-burguer').style.display = "none";
        document.getElementById('estudiantes-link-burguer').style.display = "block";
        document.getElementById('calificaciones-link-burguer').style.display = "block";
        document.getElementById('calificaciones-alumnos-link-burguer').style.display = "none";
        document.getElementById('add-new-asignatura').style.display = "inline-block";
        for (let index = 0; index < document.getElementsByClassName('delete-button').length; index++) {
            document.getElementsByClassName('delete-button')[index].style.display = "inline-block";
        }
    }
}
//funcion para seleccionar foto de perfil dependiendo del rol
function selectProfilePhoto() {
    if (getRolLogedUser().toLowerCase() == "estudiante") {
        document.getElementById("profile-img").src = "../ej-images/perfilEstudiante.png";
        return;
    }
    if (getRolLogedUser().toLowerCase() == "profesor") {
        document.getElementById("profile-img").src = "../ej-images/perfilProfesor.png";
        return;
    }
    if (getRolLogedUser().toLowerCase() == "admin") {
        document.getElementById("profile-img").src = "../ej-images/perfilAdmin.png";
        return;
    }

}

function cargaPagina() {
    var login = getCookie("login");
    if (login == "false" || login == "") {
        document.getElementsByClassName("container")[0].style.display = "block";
    } else {
        document.getElementById("main-header").style.display = "grid";
        document.getElementsByClassName("contenedor")[0].style.display = "grid";
        document.getElementById("main-block").style.display = "block";
        document.getElementById("user").textContent = getUsernameLogedUser();
        document.getElementById("bienvenida").textContent = "Bienvenido," + getUsernameLogedUser();
    }
}

//funcion para mostrar la pagina que corresponde
function showElement(id) {


    document.getElementById("principal").style.display = "none";
    document.getElementById("asignatura").style.display = "none";
    document.getElementById("calificaciones").style.display = "none";
    document.getElementById("calificaciones-alumno").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("estudiantes").style.display = "none";
    document.getElementById("faq").style.display = "none";
    document.getElementById("foro").style.display = "none";
    document.getElementById("mis-asignaturas").style.display = "none";
    document.getElementById("iu").style.display = "none";
    document.getElementById("ro").style.display = "none";
    document.getElementById("ac").style.display = "none";
    document.getElementById("is").style.display = "none";
    document.getElementById("ho").style.display = "none";
    document.getElementById("tema1-foro").style.display = "none";
    document.getElementById("tema2-foro").style.display = "none";
    document.getElementById("tema3-foro").style.display = "none";
    document.getElementById("tema4-foro").style.display = "none";
    document.getElementById("tema5-foro").style.display = "none";
    document.getElementById("interfacesTopic").style.display = "none";
    document.getElementById("heuristicaTopic").style.display = "none";
    document.getElementById("redesTopic").style.display = "none";
    document.getElementById("arquitecturaTopic").style.display = "none";
    document.getElementById("ingenieriaTopic").style.display = "none";

    document.getElementById("topicHTML").style.display = "none";
    document.getElementById("topicCSS").style.display = "none";
    document.getElementById("topicJAVASCRIPT").style.display = "none";


    document.getElementById("topicCONCURRENCIA").style.display = "none";
    document.getElementById("topicCACHE").style.display = "none";
    document.getElementById("topicPARALELISMO").style.display = "none";

    document.getElementById("topicROUTERS").style.display = "none";
    document.getElementById("topicDNS").style.display = "none";
    document.getElementById("topicIPS").style.display = "none";

    document.getElementById("topicCSP").style.display = "none";
    document.getElementById("topicBUSQUEDA").style.display = "none";
    document.getElementById("topicSIMPLEX").style.display = "none";

    document.getElementById("topicMODELADO").style.display = "none";
    document.getElementById("topicARQUITECTURA").style.display = "none";
    document.getElementById("topicREQUISITOS").style.display = "none";

    document.getElementById("newTopicCreation-interfaces").style.display = "none";
    document.getElementById("newSubjectCreation").style.display = "none";
    document.getElementById("newTopicCreation-arquitectura").style.display = "none";
    document.getElementById("newTopicCreation-heuristica").style.display = "none";
    document.getElementById("newTopicCreation-redes").style.display = "none";
    document.getElementById("newTopicCreation-ingenieria").style.display = "none";

    // hideNewTopics();
    document.getElementById(id).style.display = "block";
}
function linkAzul(){
    if (document.getElementById("interfacesTopic").style.display == "block") {
        document.getElementById("interfaces-topic-subheader").style.color = "darkblue";
    }
}

// $(function() {
//     $("#delete-iu").click(function() {
//         document.getElementById("interfaces-carta").display = "none";
//     });
// });

//delete subjects admin view
document.getElementById("delete-iu").onclick = function() {
    document.getElementById("interfaces-carta").style.display = "none";
}
document.getElementById("delete-ac").onclick = function() {
    document.getElementById("arquitectura-carta").style.display = "none";
}
document.getElementById("delete-ho").onclick = function() {
    document.getElementById("heuristica-carta").style.display = "none";
}
document.getElementById("delete-ro").onclick = function() {
    document.getElementById("redes-carta").style.display = "none";
}
document.getElementById("delete-is").onclick = function() {
    document.getElementById("sw-carta").style.display = "none";
}
document.getElementById("delete-so").onclick = function() {
    document.getElementById("operativos-carta").style.display = "none";
}
document.getElementById("delete-md").onclick = function() {
    document.getElementById("discreta-carta").style.display = "none";
}
document.getElementById("delete-cd").onclick = function() {
    document.getElementById("calculo-carta").style.display = "none";
}
document.getElementById("delete-al").onclick = function() {
    document.getElementById("algebra-carta").style.display = "none";
}
document.getElementById("delete-f").onclick = function() {
    document.getElementById("fisica-carta").style.display = "none";
}

//añdir asignatura
document.getElementById("add-iu").onclick = function() {
    showElement("principal");
    document.getElementById("interfaces-carta").style.display = "inline-block";
}
document.getElementById("add-ac").onclick = function() {
    showElement("principal");
    document.getElementById("arquitectura-carta").style.display = "inline-block";
}
document.getElementById("add-ho").onclick = function() {
    showElement("principal");
    document.getElementById("heuristica-carta").style.display = "inline-block";
}
document.getElementById("add-ro").onclick = function() {
    showElement("principal");
    document.getElementById("redes-carta").style.display = "inline-block";
}
document.getElementById("add-is").onclick = function() {
    showElement("principal");
    document.getElementById("sw-carta").style.display = "inline-block";
}
document.getElementById("add-so").onclick = function() {
    showElement("principal");
    document.getElementById("operativos-carta").style.display = "inline-block";
}
document.getElementById("add-md").onclick = function() {
    showElement("principal");
    document.getElementById("discreta-carta").style.display = "inline-block";
}
document.getElementById("add-cd").onclick = function() {
    showElement("principal");
    document.getElementById("calculo-carta").style.display = "inline-block";
}
document.getElementById("add-al").onclick = function() {
    showElement("principal");
    document.getElementById("algebra-carta").style.display = "inline-block";
}
document.getElementById("add-f").onclick = function() {
    showElement("principal");
    document.getElementById("fisica-carta").style.display = "inline-block";


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

$('select[name = "rol"]').change(function() {
    var rol = $(this).val();
    if (rol == 'estudiante') {
        document.getElementById("student-form").style.display = "block";
    } else {
        document.getElementById("student-form").style.display = "none";
    }
});

//JS CALENDAR CODE
$(function() {
    $(".calendar").simpleCalendar({
        // displays events
        displayEvent: true,
        displayYear: true,
        // event dates
        events: [{
                startDate: new Date(Date.parse("November 25, 2020 12:30 PM")),
                endDate: new Date(Date.parse("November 26, 2020 12:30 PM")),
                summary: "Calificaciones 1er parcial publicadas"
            },
            {
                startDate: new Date(Date.parse("December 2, 2020 11:00 PM")),
                endDate: new Date(Date.parse("December 9, 2020 23:59 PM")),
                summary: "Test 4 Redes"
            },
            {
                startDate: new Date(Date.parse("November 25, 2020 7:55 PM")),
                endDate: new Date(Date.parse("December 6, 2020 23:59 PM")),
                summary: "Segunda Entrega Ingenieria del Software"
            },
            {
                startDate: new Date(Date.parse("November 28, 2020 10:15 PM")),
                endDate: new Date(Date.parse("December 8, 2020 23:59 PM")),
                summary: "Entrega Trabajo Final Arquitectura de Computadores"
            },
            {
                startDate: new Date(Date.parse("December 14, 2020 9:30 PM")),
                endDate: new Date(Date.parse("December 14, 2020 23:59 PM")),
                summary: "Exposicion 3 Ingenieria del Software"
            },
            {
                startDate: new Date(Date.parse("November 18, 2020 9:30 PM")),
                endDate: new Date(Date.parse("December 17, 2020 23:59 PM")),
                summary: "Practica Final Interfaces de Usuario"
            },
            {
                startDate: new Date(Date.parse("November 4, 2020 9:30 PM")),
                endDate: new Date(Date.parse("December 22, 2020 23:59 PM")),
                summary: "Segunda Practica de Heuristica"
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

//JS COOKIES CODE 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//obtencion de la cookie
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
//chequeo de la cookie
function checkCookie(cemail) {
    var user = getCookie(cemail);
    if (user != "") {
        return true;
    } else {
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

        document.getElementById("user").textContent = "Bienvenido," + getUsernameLogedUser();

        setCookie("login", true, 30);
        setCookie("logedUser", getCookie(cmail), 30);

        document.getElementsByClassName("form-signin")[0].reset();


        document.getElementsByClassName("container")[0].style.display = "none";
        document.getElementById("main-header").style.display = "block";
        document.getElementsByClassName("contenedor")[0].style.display = "grid";
        document.getElementById("main-block").style.display = "block";

        loadAll();

    });
});
//funcion encargada de manejar el cierre de sesion (logout)
$(function() {
    $("#logout2").click(function() {

        setCookie("login", "false");
        document.getElementsByClassName("container")[0].style.display = "block";
        document.getElementById("main-header").style.display = "none";
        document.getElementsByClassName("contenedor")[0].style.display = "none";
        document.getElementById("confirm-logout").style.display = "none";
        for (let index = 0; index < document.getElementsByClassName("contenido").length; index++) {
            document.getElementsByClassName("contenido")[index].style.display = "none";
        }
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

        var iveread = document.getElementById("iveread").checked;

        if (!iveread) {
            alert("ACEPTE LOS TERMINOS Y CONDICIONES DE USO");
            return;
        }
        if (cuser == "" || cnia == "" || cpsw == "" || cname == "" || cmail == "" || cdate == "" || cdni == "" || crol == "" || clanguage == "") {
            alert("FALTAN CAMPOS POR RELLENAR");
            return;
        }

        if (crol == " -- Selecciona un rol --") {
            alert("SELECCIONA UN ROL");
            return;
        }

        if (clanguage == " -- Selecciona un idioma --") {
            alert("SELECCIONA UN IDIOMA");
            return;
        }

        if (crol == "estudiante" && cdegree == " -- Selecciona un grado --") {
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

        pattern = /[a-zA-Z0-9]{1,8}/
        if (!pattern.test(cpsw)) {
            alert("COMPRUEBA QUE EL FORMATO DE LA CONTRASEÑA ES CORRECTO");
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


    });
});

//a continuacion funciones de obtencion de cookies especificas 
function getUsernameLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[0];
}

function getNIALogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[1];
}

function getPasswordLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[2];
}

function getNameLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[3];
}

function getEmailLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[4];
}

function getDateLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[5];
}

function getDNILogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[6];
}

function getRolLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[7];
}

function getDegreeLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[8];
}

function getLanguageLogedUser() {
    var c = getCookie("logedUser");
    var ca = c.split('*');
    return ca[9];
}

//funcion encargada de intercambiar los paneles iniciar sesion y registrarse
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


// When the user clicks on the button, open the modal
document.getElementById("logout").onclick = function() {
    document.getElementById("confirm-logout").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close2")[0].onclick = function() {
    document.getElementById("confirm-logout").style.display = "none";
}

// MODAL MENSAJE
// When the user clicks on the button, open the modal
document.getElementsByClassName("far fa-comment")[0].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[1].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[2].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[3].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[4].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[5].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[6].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[7].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[8].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}
document.getElementsByClassName("far fa-comment")[9].onclick = function() {
    window.location = "mailto:xyz@loadAll.com";
}



//a continuacion funciones encargadas de la descarga de calificaciones en excell
$("#notas-global").click(function() {
    $("table-page").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#interfaces").click(function() {
    $("#table-interfaces").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#redes").click(function() {
    $("#table-redes").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#computadores").click(function() {
    $("#table-computadores").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#software").click(function() {
    $("#table-software").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#heuristica").click(function() {
    $("#table-heuristica").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

$("#export-button").click(function() {
    $("#table-notas").table2excel({
        name: "notas",
        filename: "calificaciones.xls"
    });
});

//funcion encargada de controlar nav
$("menu").click(function() {
    document.getElementsByTagName("nav")[0].style.gridTemplateRows = "1fr 1fr";
});

//a continuacion funciones encargadas del control del foro y el envio de mensajes
$("#forum1").click(function() {
    var foto;

    if (getRolLogedUser() == "estudiante") {
        foto = "../ej-images/perfilEstudiante.png";
    } else if (getRolLogedUser() == "profesor") {
        foto = "../ej-images/perfilProfesor.png";
    } else if (getRolLogedUser() == "admin") {
        foto = "../ej-images/perfilAdmin.png";
    }

    var texto = document.getElementsByName("Text1")[0].value;

    var bloque = '<div class="chat-entry"><img class="profile-img" src="' + foto + '" alt=""><span class="profile-name">' + getNameLogedUser().toUpperCase() + '</span><p class="profile-entry">' + texto + '</p></div>';
    $("#mensajes-1").append(bloque);
    document.getElementsByName("Text1")[0].value = "";
});

$("#boton-tema-interfaces").click(function() {

    var titulo = document.getElementById("area-titulo-interfaces").value;
    var description = document.getElementById("area-descripcion-interfaces").value;
    var bloque = '<div class="card" onclick="showElement("topicJAVASCRIPT");"><div class="heading"><h1>' + titulo + '</h1></div><div class="content"><h2>' + description + '</h2><p>(nuevo)</p></div></div>';
    showElement("interfacesTopic");
    $("#interfacesCardset").append(bloque);
});

$("#boton-tema-arquitectura").click(function() {

    var titulo = document.getElementById("area-titulo-arquitectura").value;
    var description = document.getElementById("area-descripcion-arquitectura").value;
    var bloque = '<div class="card" onclick="showElement("topicJAVASCRIPT");"><div class="heading"><h1>' + titulo + '</h1></div><div class="content"><h2>' + description + '</h2><p>(nuevo)</p></div></div>';
    showElement("arquitecturaTopic");
    $("#arquitecturaCardset").append(bloque);
});

$("#boton-tema-heuristica").click(function() {

    var titulo = document.getElementById("area-titulo-heuristica").value;
    var description = document.getElementById("area-descripcion-heuristica").value;
    var bloque = '<div class="card" onclick="showElement("topicJAVASCRIPT");"><div class="heading"><h1>' + titulo + '</h1></div><div class="content"><h2>' + description + '</h2><p>(nuevo)</p></div></div>';
    showElement("heuristicaTopic");
    $("#heuristicaCardset").append(bloque);
});

$("#boton-tema-redes").click(function() {

    var titulo = document.getElementById("area-titulo-redes").value;
    var description = document.getElementById("area-descripcion-redes").value;
    var bloque = '<div class="card" onclick="showElement("topicJAVASCRIPT");"><div class="heading"><h1>' + titulo + '</h1></div><div class="content"><h2>' + description + '</h2><p>(nuevo)</p></div></div>';
    showElement("redesTopic");
    $("#redesCardset").append(bloque);
});

$("#boton-tema-ingenieria").click(function() {

    var titulo = document.getElementById("area-titulo-ingenieria").value;
    var description = document.getElementById("area-descripcion-ingenieria").value;
    var bloque = '<div class="card" onclick="showElement("topicJAVASCRIPT");"><div class="heading"><h1>' + titulo + '</h1></div><div class="content"><h2>' + description + '</h2><p>(nuevo)</p></div></div>';
    showElement("ingenieriaTopic");
    $("#ingenieriaCardset").append(bloque);
});


/*$("#add-al").click(function() {

    var bloque = '<div id="algebra-carta" class="card" style="display: none;"><div class="heading"></div><div class="content"><h1>ALGEBRA LINEAL</h1></div><button id="delete-al" class="delete-button" style="display: inline-block;">ELIMINAR</button></div>';
    showElement("principal");
    $("#cards-set").append(bloque);
});
*/
$("#forum2").click(function() {
    var foto;

    if (getRolLogedUser() == "estudiante") {
        foto = "../ej-images/perfilEstudiante.png";
    } else if (getRolLogedUser() == "profesor") {
        foto = "../ej-images/perfilProfesor.png";
    } else if (getRolLogedUser() == "admin") {
        foto = "../ej-images/perfilAdmin.png";
    }

    var texto = document.getElementsByName("Text2")[0].value;

    var bloque = '<div class="chat-entry"><img class="profile-img" src="' + foto + '" alt=""><span class="profile-name">' + getNameLogedUser().toUpperCase() + '</span><p class="profile-entry">' + texto + '</p></div>';
    $("#mensajes-2").append(bloque);
    document.getElementsByName("Text2")[0].value = "";

});

$("#forum3").click(function() {
    var foto;

    if (getRolLogedUser() == "estudiante") {
        foto = "../ej-images/perfilEstudiante.png";
    } else if (getRolLogedUser() == "profesor") {
        foto = "../ej-images/perfilProfesor.png";
    } else if (getRolLogedUser() == "admin") {
        foto = "../ej-images/perfilAdmin.png";
    }

    var texto = document.getElementsByName("Text3")[0].value;

    var bloque = '<div class="chat-entry"><img class="profile-img" src="' + foto + '" alt=""><span class="profile-name">' + getNameLogedUser().toUpperCase() + '</span><p class="profile-entry">' + texto + '</p></div>';
    $("#mensajes-3").append(bloque);
    document.getElementsByName("Text3")[0].value = "";
});

$("#forum4").click(function() {
    var foto;

    if (getRolLogedUser() == "estudiante") {
        foto = "../ej-images/perfilEstudiante.png";
    } else if (getRolLogedUser() == "profesor") {
        foto = "../ej-images/perfilProfesor.png";
    } else if (getRolLogedUser() == "admin") {
        foto = "../ej-images/perfilAdmin.png";
    }

    var texto = document.getElementsByName("Text4")[0].value;

    var bloque = '<div class="chat-entry"><img class="profile-img" src="' + foto + '" alt=""><span class="profile-name">' + getNameLogedUser().toUpperCase() + '</span><p class="profile-entry">' + texto + '</p></div>';
    $("#mensajes-4").append(bloque);
    document.getElementsByName("Text4")[0].value = "";
});

$("#forum5").click(function() {
    var foto;

    if (getRolLogedUser() == "estudiante") {
        foto = "../ej-images/perfilEstudiante.png";
    } else if (getRolLogedUser() == "profesor") {
        foto = "../ej-images/perfilProfesor.png";
    } else if (getRolLogedUser() == "admin") {
        foto = "../ej-images/perfilAdmin.png";
    }

    var texto = document.getElementsByName("Text5")[0].value;

    var bloque = '<div class="chat-entry"><img class="profile-img" src="' + foto + '" alt=""><span class="profile-name">' + getNameLogedUser().toUpperCase() + '</span><p class="profile-entry">' + texto + '</p></div>';
    $("#mensajes-5").append(bloque);
    document.getElementsByName("Text5")[0].value = "";
});
//funcion control del menu
$("#boton-menu").click(function() {
    if (document.getElementById("left-column").style.display == "none") {
        document.getElementById("left-column").style.display = "block";
        document.getElementById("right-column").style.display = "block";
    } else if (document.getElementById("left-column").style.display != "none") {
        document.getElementById("left-column").style.display = "none";
        document.getElementById("right-column").style.display = "none";
    }
});

// var lastTopic;

// function getLastTopic() {
//     return lastTopic;
// }

// function setLastTopic(topic) {
//     lastTopic = topic;
// }

// function addTopic(topic) {
//     const cardset = document.getElementById(topic);
//     const subtopics = document.getElementById("subtopics");

//     newCard = document.createElement("div");
//     newCard.class = "card";

//     newHeading = document.createElement("div");
//     heading = document.getElementById("headingArea").value;
//     newHeading.class = "heading";
//     newHeading.textContent = heading;

//     newCard.appendChild(newHeading);

//     newContent = document.createElement("div");
//     newContent.class = "content";

//     newH1 = document.createElement("h1");
//     newContent.appendChild(newH1)

//     newCard.appendChild(newContent);
//     /* Creamos una estructura card
//     <div class ="card">
//         <div class ="heading">
//         </div>
//         <div class ="content">
//             <h1></h1>
//         </div>
//     </div>
//     */

//     newTopic = document.createElement("div");
//     newTopic.class = "createdTopics";
//     newTopic.id = heading;
//     newTopic.style.display = "none";

//     desc = document.createElement("h1");
//     description = document.getElementById("descriptionArea").value;
//     desc.textContent = description;
//     newTopic.appendChild(desc)

//     info = document.createElement("p");
//     p = document.getElementById("informationArea").value;
//     info.textContent = p;
//     newTopic.appendChild(info);

//     /* Creamos una estructura newTopic
//     <div class ="createdTopics">
//         <h1>desc</h1>
//         <p>info</p>
//     </div>
//     */
//     newCard.onclick = "showElement(" + newTopic.id + ");";
//     cardset.appendChild(newCard);
//     subtopics.appendChild(newTopic);

// }

// function hideNewTopics() {
//     newTopics = document.getElementsByClassName("createdTopics");
//     if (newTopics == null) return;
//     for (i = 0; i < newTopics.length; i++) {
//         newTopics[i].style.display = "none";
//     }
// }