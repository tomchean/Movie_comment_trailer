// Convert time to hours and minutes
export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = money => {
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });
    return formatter.format(money);
};

export const fetchMovies = (endpoint, returnFunc = result => result) => {
    return fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            return returnFunc(result);
        })
        .catch(error => console.error("Error:", error));
};
/*
export const fecthGoogleSearch = (searchtext) =>{
    axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
        action: 'opensearch',
        datatype: 'json',
        limit: 15,
        search: searchtext,
        origin: '*'
        }
    })
    .then((resp) => {
        console.log(resp.data)
    })
}*/