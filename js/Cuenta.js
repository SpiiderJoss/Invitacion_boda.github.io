
    let fecha = new Date("2025-06-21");
    let msFecha = fecha.getTime();

    let parrafoDias = document.querySelector("#dias");
    let parrafoHoras = document.querySelector("#Horas");
    let parrafoMinutos = document.querySelector("#minutos");
    let parrafoSegundos = document.querySelector("#Segundos");

    setInterval(() =>{
        let hoy = new Date().getTime();
        let distancia = msFecha -hoy;

        let msPorDia = 1000 * 60 * 60 *24;
        let msPorHora = 1000 * 60 * 60;
        let msPorMinuto = 1000 * 60;
        let msPorSegundo = 1000;

        let dias = Math.floor(distancia /msPorDia);
        let horas = Math.floor((distancia % msPorDia) / msPorHora);
        let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
        let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

        parrafoDias.innerText  = dias;
        parrafoHoras.innerText  = horas;
        parrafoMinutos.innerText  = minutos;
        parrafoSegundos.innerText = segundos;
    });

