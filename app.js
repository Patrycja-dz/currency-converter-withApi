// // console.log("hello")
// // let ratesByBase = {}

// let form = document.querySelector(".js-form");
// let amount = document.querySelector(".js-amount")

// let currency = document.querySelector(".js-currency").value
// // // const proxy = "https://cors-anywhere.herokuapp.com/"
// // // const api = "https://api.exchangerate.host/latest"
// // let api = 'https://api.exchangerate.host/latest';
// let renderAPi = async (url) => {
//     const apiData = await fetch(url);
//     const data = await apiData.json()
//     console.log(data)
//     const {
//         USD,
//         EUR,
//         GBP
//     } = data.rates
//     // console.log(curr)
//     const newOption1 = document.createElement("option")
//     newOption1.value = USD
//     console.log(newOption1.value)
//     newOption1.innerText = "USD"
//     currency.appendChild(newOption1)
//     const newOption2 = document.createElement("option")
//     newOption2.value = EUR
//     newOption2.innerText = "EUR"
//     currency.appendChild(newOption2)
//     const newOption3 = document.createElement("option")
//     newOption3.value = GBP
//     newOption3.innerText = "GBP"
//     currency.appendChild(newOption3)
//     // let result1 = newOption1.value * amount
//     // console.log(result1)
//     const plnValue = +amount.value
//     let res1 = plnValue * newOption1.value

//     console.log(res1)
//     console.log(plnValue)
// }
// renderAPi(api)
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
{
//     const getTargetAmount = (plnValue, currency, api, data) => {

//     }
//     let api = 'https://api.exchangerate.host/latest';
//     let renderAPi = async (url) => {
//         const apiData = await fetch(url);
//         const data = await apiData.json()
//         console.log(data)
//         const {
//             USD,
//             EUR,
//             GBP
//         } = data.rates

//         renderAPi(api)
//         const updateResultText = (plnValue, result, currency) => {
//             const form__paragraph = document.querySelector(".js-result")
//             form__paragraph.innerHTML = `${plnValue} PLN=<strong>${result} ${currency}</strong>`
//         }
//         const onFomrSubmit = (event) => {
//             event.preventDefault();
//             const amount = document.querySelector(".js-amount")
//             const currency = document.querySelector(".js-currency").value
//             const plnValue = +amount.value
//             const result = getTargetAmount(plnValue, currency)
//             updateResultText(plnValue, result, currency)
//         }

//         const init = () => {
//             const form = document.querySelector(".js-form");
//             form.addEventListener("submit", onFomrSubmit)
//         }
//         init()
//     }
// }