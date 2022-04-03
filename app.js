console.log("hello")
let ratesByBase = {}
let form = document.querySelector(".js-form")
let amount = document.querySelector(".js-amount")
let currency = document.querySelector(".js-currency")
let result = document.querySelector(".js-result")


// const proxy = "https://cors-anywhere.herokuapp.com/"
// const api = "https://api.exchangerate.host/latest"
let api = 'https://api.exchangerate.host/latest';
let renderAPi = async (url) => {
    const apiData = await fetch(url);
    const data = await apiData.json()
    console.log(data)
    const {
        USD,
        EUR,
        GBP
    } = data.rates
    console.log(curr)
    const newOption1 = document.createElement("option")
    newOption1.value = USD
    newOption1.innerText = "USD"
    currency.appendChild(newOption1)
    const newOption2 = document.createElement("option")
    newOption2.value = EUR
    newOption2.innerText = "EUR"
    currency.appendChild(newOption2)
    const newOption3 = document.createElement("option")
    newOption3.value = GBP
    newOption3.innerText = "GBP"
    currency.appendChild(newOption3)

}
renderAPi(api)
// async function fetchRates(base = "USD") {
//     const result = await fetch(`${api}?base=${base}`)
//     const rates = await result.json()
//     return rates


// function convert(amount, from, to) {
//     if (!ratesByBase[from]) {
//         console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's gp get it`)
//         const rates = await fetchRates(from)
//         console.log(rates)
//         ratesByBase[from] = rates
//     }


form.addEventListener("sumbit", (event) => {
    event.preventDefault()
    //  const {base,date,rates} = data.currently
    // currency.textContent = rates

})