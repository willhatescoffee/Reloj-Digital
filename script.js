const escritura = document.getElementById("reloj");

const getHora = () => {
    const fecha = new Date(); 

    const tiempo = {
        hora: fecha.getHours().toString().padStart(2, '0'),
        minuto: fecha.getMinutes().toString().padStart(2, '0'),
        segundo: fecha.getSeconds().toString().padStart(2, '0')
    };

    const ahora = tiempo.hora + ":" + tiempo.minuto + ":" + tiempo.segundo;
    escritura.textContent = ahora;
};

setInterval(getHora, 1000);
