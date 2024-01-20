
const APICall = async (gift) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/gift/?gift=${gift}`);
        console.log(response.text);

    } catch (err) {
        console.error('Error during fetching data:', err);
        throw err;
    }
}

export { APICall };
