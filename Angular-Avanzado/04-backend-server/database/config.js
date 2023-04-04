const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        // Respuesta en caso de generar una respuesta correcta.
        await mongoose.connect(process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        // Respuesta en caso de generar una respuesta de error.
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

module.exports = {
    dbConnection
}