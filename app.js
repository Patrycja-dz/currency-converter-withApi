const amount = document.getElementById("js-number");
const select = document.getElementById("js-select");
const convert = document.querySelector(".js-button");
const result = document.querySelector(".js-text");
let amountToConvert = 0;

const api = "http://api.nbp.pl/api/exchangerates/tables/c/";

const conectApi = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    const tables = json[0].rates;
    // console.log(tables) array of currencies 
    const renderedRates = tables.filter((currency) => {
        return currency.code === "EUR" || currency.code === "USD" || currency.code === "CHF"

    })
    // console.log(renderedRates) // array
    for (const element of renderedRates) {
        // console.log(element) // 3 objects - eur, usd, chf
        select.innerHTML  += `<option value = "${element.bid}">${element.code}</option>`
    }

}
conectApi(api)