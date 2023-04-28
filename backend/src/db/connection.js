const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb+srv://bemoldesafio:rGr6Q03P2ZQSaPZ1@teste.5urenxg.mongodb.net/?retryWrites=true&w=majority");
        console.log('Conectado com o banco de dados')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

//bemoldesafio
//rGr6Q03P2ZQSaPZ1

module.exports = main