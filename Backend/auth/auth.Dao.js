const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create : function(data,callB){
        const user = new this(data);
        user.save(callB);
    },

    login: function(query, callB){
        this.find(query, callB);
    }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;