import serverless from 'serverless-http';
import express from 'express';

const app = express();
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send({ msg:'Hello World' })
})

const handler = serverless(app);

export { handler }
