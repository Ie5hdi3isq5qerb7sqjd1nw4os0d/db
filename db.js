const {
    DataTypes,
    Sequelize
} = require('sequelize');

const DB = new Sequelize({
    dialect: "sqlite",
    storage: "postgres://mehuyekdylkyvr:2b60dfd0ab1fbd6e8e043c6ef6bcbe02445fe073f1af261b0ef505995cb0dd18@ec2-54-147-33-38.compute-1.amazonaws.com:5432/d5jtm8ami0euio",
    logging: "debug"
})

console.log(DB)
const sessions = /*config.DATABASE.*/ DB.define('sessions', {
    sessions: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function get() {
    const Msgs = await sessions.findAll()
    return Msgs
}

async function push(msg) {
    return await sessions.create({
        msg
    });
}

async function del() {
    return await sessions.destroy({
        where: {},
        truncate: true
    })
}

module.exports = {
    sessions,
    get,
    push,
    del
}
