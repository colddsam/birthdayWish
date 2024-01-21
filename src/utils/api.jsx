
const SendMail = async (gift,sender) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/mail/?text=${gift}&sender=${sender}`);
        console.log(response.text);

    } catch (err) {
        console.error('Error during fetching data:', err);
        throw err;
    }
}

const NameFind = async() => {
    let text = 'Unknown';
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/birthday`);
        const data = await response.json();
        text = data.name;
    } catch (err) {
        console.log("Initialization Failed");
    }
    return text;
}

export { SendMail,NameFind };
