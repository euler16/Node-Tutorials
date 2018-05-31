const model = require('../model');
module.exports = {
    fillTable: function(userData,callback) {
                model.User.sync({force: false}).then(() => {
                    return model.User.create({
                    firstName: userData.firstName,
                    lastName: userData.lastName
                }).then((data)=> {
                    callback(null,data); // callback(err,data)
                }).catch((err)=> {
                    callback(err,null);
                })
            })
    },

    destroy: function(id,callback) {
        console.log(id);
        console.log("in destroy");
        model.User.sync({force:false}).then(()=> {
            return model.User.destroy({
                where: {
                    id: `${id}`
                }
            });
        }).then((data)=> {
            callback(null,data);
        }).catch((err)=> {
            callback(err,null);
        });
    }
}