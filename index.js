const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const resolver = require('./graphql/resolver');
const sequlize = require('./utils/database');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

app.use((req, res, next) => {
    res.sendFile('/index.html')
});

async function start() {
    try {
        await sequlize.sync();
        const ip = '192.168.88.104';
        const PORT = process.env.PORT || 3001;
        const address = `http://${ip}:${PORT}`;

        app.listen(PORT, ip, () => {
            console.log(`Server is running on address ${address}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start();