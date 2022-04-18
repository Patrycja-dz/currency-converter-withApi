{
    const select = document.getElementById("js-select");
    async function getCurrencyList() {
        try {
            let response = await fetch(`http://api.nbp.pl/api/exchangerates/tables/c/?format=json`);
            let json = await response.json();
            const data = json[0].rates;
            const renderedRates = data.filter((rate) => {
                return rate.code === "EUR" || rate.code === "USD" || rate.code === "CHF";
            });

            const renderOptions = () => {
                for (element of renderedRates) {
                    console.log(element)
                    select.innerHTML += `<option value = "${element.code}">${element.code}</option>`
                }

            }
            renderOptions()

            const calculateResult = (amount, currency) => {
                switch (currency) {
                    case "USD":
                        return amount / element.bid;
                    case "EUR":
                        return amount / element.bid;
                    case "CHF":
                        return amount / element.bid;
                    default:
                        console.log("something went wrong")
                }

            }
            const updateResultText = (amount, result, currency) => {
                const resultElement = document.querySelector(".js-result");
                resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`
            }
            const onFormSubmit = (event) => {
                event.preventDefault();
                const amountElement = document.getElementById("js-number");
                const amount = +amountElement.value;
                const currency = select.value;
                const result = calculateResult(amount, currency);
                updateResultText(amount, result, currency)

            }
            const init = () => {
                const formElement = document.querySelector(".js-form");
                formElement.addEventListener("submit", onFormSubmit)
            }
            init()

        } catch (err) {
            console.log(err)
        }
    }
    getCurrencyList()

}