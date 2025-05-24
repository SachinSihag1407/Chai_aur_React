import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())        // it converts the data into json format
            .then((res) => (setData(res[currency])))   // yha pr ye  ho rha h h ki jo responsce aa rha h
        //  usme se settdata kaa use krke inr like dollar or currencies ki letter nikale ja  rhe h 

        console.log(data);    // jo data aayega vo print hhoga
    }, [currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;