function pegarDataFull() {
    const agora = new Date();
    const horarioAtual = agora.toLocaleTimeString();
    const dataAtual = agora.toLocaleDateString();
    const dataHora = `${horarioAtual} - ${dataAtual}`
    return dataHora
}

function pegarData() {
    const agora = new Date();
    const dataAtual = agora.toLocaleDateString();
    return dataAtual
}

function pegarHoras() {
    const agora = new Date();
    const horarioAtual = agora.toLocaleTimeString();
    return horarioAtual
}

const secretPass = process.env.ASSINATURA

module.exports = {
    pegarDataFull,
    pegarData,
    pegarHoras,
    secretPass
}