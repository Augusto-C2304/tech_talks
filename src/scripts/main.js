AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;


    const diaEnMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const MinutosEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEnMs);
    const horarAteOEvento = Math.floor((distanciaAteOEvento % diaEnMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / MinutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horarAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);