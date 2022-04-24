{
    const qs = (selector) => document.querySelector(selector);
    const create = (tag) => document.createElement(tag);

    const calculatorBtn = qs(".js-button");

    const init = () => {
        setTimeout(() => {
            const loader = qs(".loader");
            const container = qs(".container");
            loader.style.opacity = 0;
            loader.style.display = 'none';
            container.style.display = "block";
            setTimeout(() => (container.style.opacity = 1), 50)
        }, 3000)
        const form = qs(".js-form");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

        });
        getCurrencyList();

    }
    const currencies = qs(".js-currencies");
    const getCurrencyList = () => {
        fetch("http://api.nbp.pl/api/exchangerates/tables/c/?format=json")
            .then((response) => response.json())
            .then((data) => {
                const currency = data[0].rates.filter((rate) => {
                    return rate.code === "EUR" || rate.code === "USD" || rate.code === "CHF";
                    // console.log(currency)
                });
                currency.forEach(({
                    code,
                    bid
                }) => {
                    const options = create("option");
                    options.value = bid;
                    options.textContent = code;
                    currencies.appendChild(options);
                    const amountElement = qs(".js-input");
                    const calculateResult = () => {
                        const amount = +amountElement.value;
                        const result = amount / options.value;

                        const showResult = () => {
                            const resultElement = qs(".js-result");
                            resultElement.value = "";
                            resultElement.textContent = `${amount.toFixed(2)} to ${result.toFixed(2)} PLN `;
                            console.log(resultElement.textContent = `${amount.toFixed(2)} to ${result.toFixed(2)} PLN `)
                            
                        }
                        showResult()

                    }
                    calculateResult()


                });

            })
            .catch((error) => console.log(error));
    }

    init()
}