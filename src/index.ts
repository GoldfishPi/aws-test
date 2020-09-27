const handler = async () => {
    const res = {
        statusCode: 200,
        body: JSON.stringify('Hello world aws lambda + ci/cd!!')
    }
    return res;
}

export { handler };
