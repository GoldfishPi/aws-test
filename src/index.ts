import express from 'express';
import serverless from 'serverless-http';

const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ msg:'Hello World Serverless' })
});

const handler = serverless(app);

const lambda = () => {
    return 'hello lol'
}

export { handler, lambda };
