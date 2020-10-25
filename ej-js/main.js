function showElement(id) {
    document.getElementById('main-block').style.display = 'none';
    document.getElementById('asignatura').style.display = 'none';
    document.getElementById('calificaciones').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
    document.getElementById('estudiantes').style.display = 'none';
    document.getElementById('faq').style.display = 'none';
    document.getElementById('foro').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}