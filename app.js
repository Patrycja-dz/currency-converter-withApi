{
    const qs = (selector) => document.querySelector(selector);
    const create = (tag) => document.createElement(tag);
    const form = qs(".js-form");
    const btn = qs(".js-button")
    let currentCurrency;

    function getCurrencyList() {
        const url = "http://api.nbp.pl/api/exchangerates/tables/c/?format=json";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let currency = data[0].rates;
                let currencyElements = currency.filter((rate) => rate.code === "USD" || rate.code === "EUR" || rate.code === "CHF")
                // console.log(currencyElements[1])
                const renderOptions = (currencyElements) => {
                    currencyElements.forEach(element => {
                        element.bid && element.code;
                        const select = qs(".js-currencies");
                        const createOptions = create("option");
                        createOptions.value = element.bid;
                        createOptions.textContent = element.code;
                        select.appendChild(createOptions);
                        currentCurrency = currencyElements[0].bid;
                        select.addEventListener("change", () => {
                            currentCurrency = `${select.value}`;
                            console.log(currentCurrency) // value of option
                        });


                    })

                }
                renderOptions(currencyElements);


            });

    }
    getCurrencyList();
    setTimeout(() => {
        const loader = qs(".loader");
        const container = qs(".container");
        loader.style.opacity = 0;
        loader.style.display = 'none';
        container.style.display = "block";
        setTimeout(() => (container.style.opacity = 1), 50)
    }, 3000);

    function reset() {
        const resetBtn = qs(".js-reset");
        resetBtn.addEventListener("click", () => {
            form.reset()
            const textEl = qs(".js-result");
            textEl.innerHTML = ``;
        })
    }
    reset();

    const init = () => {
        const result = (currentCurrency) => {
            const amountEl = qs(".js-input");
            const amount = +amountEl.value;
            let res = amount / currentCurrency;
            const textEl = qs(".js-result");
            textEl.innerHTML = `${amount.toFixed(2)} to ${res.toFixed(2)} PLN `;
        }

        btn.addEventListener("click", () => {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                result(currentCurrency);
            })
        })
    };

    init();
}