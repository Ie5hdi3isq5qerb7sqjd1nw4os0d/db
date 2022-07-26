const sqlDB = require('./db')

async function run() {
    var push = await sqlDB.push("test");
    var get = await sqlDB.get();
    console.log(get)
}

run()
