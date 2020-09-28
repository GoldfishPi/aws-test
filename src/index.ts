import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/', (_, res) => {
    res.send({ msg:'Hello World Serverless this is a test' })
});

const handler = serverless(app);

const lambda = (data:any) => {
    return data.body;
}

export { handler, lambda };
