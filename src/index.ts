const handler = async () => {
    const res = {
        statusCode: 200,
        body: JSON.stringify('Hello world aws lambda!!')
    }
    return res;
}

export { handler };
