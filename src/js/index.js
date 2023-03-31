var relogio = setInterval(function time() {
    var h = document.getElementById('H')
    var m = document.getElementById('M')
    var s = document.getElementById('S')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    h.innerHTML = hora
    m.innerHTML = minutos
    s.innerHTML = segundos
}) 