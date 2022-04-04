const API_URL = `https://api.exchangerate.host/latest`


function getCurrencies(options) {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // const {
            //     base,
            //     date,
            //     rates,
            //     currenciesValues = rates.valueOf()
            //     // symbo2EUR="EUR",
            //     // symbo3USD= "USD"

            // } = data
            console.log(data)


        })
}
getCurrencies({symbols:'GBP,USD,EUR'})