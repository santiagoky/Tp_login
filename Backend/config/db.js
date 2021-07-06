const mongoose = require('mongoose');
const dbUrl = require('./properties').DB;

module.exports = ()=> {
    mongoose.connect(dbUrl, {useNewUrlParser: true})
    .then(()=> console.log(`Mongo connected on ${dbUrl}`))
    .catch( err => console.log(`Conection error ${err}`));

    process.on('SIGINT', ()=> {
        mongoose.connection.close( ()=> {
            console.log(`mongo desconected`);
            process.exit(0);
        })
    })
}