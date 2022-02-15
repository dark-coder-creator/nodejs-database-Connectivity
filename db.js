 const { Pool,Client } = require('pg')

// const pool = new Pool({
//     user:'postgres',
//     host:'localhost',
//     database:'postgres',
//     password:'ramanmenon',
//     port:5432
// })

// pool.query('SELECT NOW()',(err,res) => {
//     console.log("Pool")
//     console.log(err,res)
//     pool.end();
// })

const client = new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'ramanmenon',
    port:5432
})

client.connect();

const query = {
    text:'INSERT INTO users(name,email) VALUES($1,$2) returning *',
    values:['keshu','keshu@gmail.com']
}

const query2 = {
    text:'SELECT * FROM users'
}

client.query(query2)
      .then(res => console.log(res.rows))
      .catch(e => console.error(e.stack))

client.query('SELECT NOW()',(err,res) => {
    console.log("Client")
    console.log(res)
    client.end()
})