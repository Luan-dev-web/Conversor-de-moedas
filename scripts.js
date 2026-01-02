const convertButton = document.querySelector(".convert-button");

function convertValues() {

    const inputValue = Number(
        document.querySelector(".input-currency").value
    );

    const fromCurrency = document.querySelector("#from-currency").value;
    const toCurrency = document.querySelector("#to-currency").value;

    let valueInBRL = 0;
    let convertedValue = 0;

    /* =====================
       MOEDA DE ORIGEM
    ====================== */

    if (fromCurrency === "BRL") {
        valueInBRL = inputValue;
        document.querySelector("#moeda-de").textContent = "Real";
        document.querySelector("#imagem-de").src = "assets/Brasil.gif";
    }

    if (fromCurrency === "USD") {
        valueInBRL = inputValue * 5;
        document.querySelector("#moeda-de").textContent = "Dólar";
        document.querySelector("#imagem-de").src = "assets/EUA.gif";
    }

    if (fromCurrency === "EUR") {
        valueInBRL = inputValue * 5.4;
        document.querySelector("#moeda-de").textContent = "Euro";
        document.querySelector("#imagem-de").src = "assets/união.png";
    }

    if (fromCurrency === "ARS") {
        valueInBRL = inputValue * 0.015;
        document.querySelector("#moeda-de").textContent = "Peso";
        document.querySelector("#imagem-de").src = "assets/Argentina.gif";
    }

    if (fromCurrency === "QAR") {
        valueInBRL = inputValue * 1.37;
        document.querySelector("#moeda-de").textContent = "Rial";
        document.querySelector("#imagem-de").src = "assets/Qatar.gif";
    }

    if (fromCurrency === "VES") {
        valueInBRL = inputValue * 0.14;
        document.querySelector("#moeda-de").textContent = "Bolívar";
        document.querySelector("#imagem-de").src = "assets/Venezuela.gif";
    }

    if (fromCurrency === "CNY") {
        valueInBRL = inputValue * 0.69;
        document.querySelector("#moeda-de").textContent = "Yuan";
        document.querySelector("#imagem-de").src = "assets/China.gif";
    }

    if (fromCurrency === "COP") {
        valueInBRL = inputValue * 0.0013;
        document.querySelector("#moeda-de").textContent = "Peso";
        document.querySelector("#imagem-de").src = "assets/Colômbia.gif";
    }

    if (fromCurrency === "EGP") {
        valueInBRL = inputValue * 0.16;
        document.querySelector("#moeda-de").textContent = "Libra";
        document.querySelector("#imagem-de").src = "assets/Egito.gif";
    }

    if (fromCurrency === "INR") {
        valueInBRL = inputValue * 0.06;
        document.querySelector("#moeda-de").textContent = "Rúpia";
        document.querySelector("#imagem-de").src = "assets/Índia.gif";
    }

    if (fromCurrency === "JPY") {
        valueInBRL = inputValue * 0.034;
        document.querySelector("#moeda-de").textContent = "Iene";
        document.querySelector("#imagem-de").src = "assets/Japão.gif";
    }

    if (fromCurrency === "MXN") {
        valueInBRL = inputValue * 0.29;
        document.querySelector("#moeda-de").textContent = "Peso";
        document.querySelector("#imagem-de").src = "assets/México.gif";
    }

    if (fromCurrency === "GBP") {
        valueInBRL = inputValue * 6.3;
        document.querySelector("#moeda-de").textContent = "Libra";
        document.querySelector("#imagem-de").src = "assets/Reino Unido.gif";
    }

    if (fromCurrency === "RUB") {
        valueInBRL = inputValue * 0.055;
        document.querySelector("#moeda-de").textContent = "Rublo";
        document.querySelector("#imagem-de").src = "assets/Rússia.gif";
    }
    
    if (fromCurrency === "TRY") {
        valueInBRL = inputValue * 0.16;
        document.querySelector("#moeda-de").textContent = "Lira";
        document.querySelector("#imagem-de").src = "assets/Turquia.gif";
    }






    /* =====================
       MOEDA DE DESTINO
    ====================== */







    if (toCurrency === "BRL") {
        convertedValue = valueInBRL;
        document.querySelector("#moeda-para").textContent = "Real";
        document.querySelector("#imagem-para").src = "assets/Brasil.gif";
    }

    if (toCurrency === "USD") {
        convertedValue = valueInBRL / 5;
        document.querySelector("#moeda-para").textContent = "Dólar";
        document.querySelector("#imagem-para").src = "assets/EUA.gif";
    }

    if (toCurrency === "EUR") {
        convertedValue = valueInBRL / 5.4;
        document.querySelector("#moeda-para").textContent = "Euro";
        document.querySelector("#imagem-para").src = "assets/união.png";
    }

     if (toCurrency === "ARS") {
        convertedValue = valueInBRL / 0.015;
        document.querySelector("#moeda-para").textContent = "Peso";
        document.querySelector("#imagem-para").src = "assets/Argentina.gif";
    }

     if (toCurrency === "QAR") {
        convertedValue = valueInBRL / 1.37;
        document.querySelector("#moeda-para").textContent = "Rial";
        document.querySelector("#imagem-para").src = "assets/Qatar.gif";
    }

     if (toCurrency === "VES") {
        convertedValue = valueInBRL / 0.14;
        document.querySelector("#moeda-para").textContent = "Bolívar";
        document.querySelector("#imagem-para").src = "assets/Venezuela.gif";
    }

     if (toCurrency === "CNY") {
        convertedValue = valueInBRL / 0.69;
        document.querySelector("#moeda-para").textContent = "Yuan";
        document.querySelector("#imagem-para").src = "assets/China.gif";
    }

     if (toCurrency === "COP") {
        convertedValue = valueInBRL / 0.0013;
        document.querySelector("#moeda-para").textContent = "Peso";
        document.querySelector("#imagem-para").src = "assets/Colômbia.gif";
    }

     if (toCurrency === "EGP") {
        convertedValue = valueInBRL / 0.16;
        document.querySelector("#moeda-para").textContent = "Libra";
        document.querySelector("#imagem-para").src = "assets/Egito.gif";
    }

     if (toCurrency === "INR") {
        convertedValue = valueInBRL / 0.06;
        document.querySelector("#moeda-para").textContent = "Rúpia";
        document.querySelector("#imagem-para").src = "assets/Índia.gif";
    }

     if (toCurrency === "JPY") {
        convertedValue = valueInBRL / 0.034;
        document.querySelector("#moeda-para").textContent = "Iene";
        document.querySelector("#imagem-para").src = "assets/Japão.png";
    }

     if (toCurrency === "MXN") {
        convertedValue = valueInBRL / 0.29;
        document.querySelector("#moeda-para").textContent = "Peso";
        document.querySelector("#imagem-para").src = "assets/México.gif";
    }

     if (toCurrency === "GBP") {
        convertedValue = valueInBRL / 6.3;
        document.querySelector("#moeda-para").textContent = "Libra";
        document.querySelector("#imagem-para").src = "assets/Reino Unido.gif";
    }

     if (toCurrency === "RUB") {
        convertedValue = valueInBRL / 0.055;
        document.querySelector("#moeda-para").textContent = "Ruplo";
        document.querySelector("#imagem-para").src = "assets/Rússia.gif";
    }

     if (toCurrency === "TRY") {
        convertedValue = valueInBRL / 0.16;
        document.querySelector("#moeda-para").textContent = "Lira";
        document.querySelector("#imagem-para").src = "assets/Turquia.gif";
    }

    /* =====================
       MOSTRAR VALORES
    ====================== */

    document.querySelector("#valor-de").textContent =
        inputValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: fromCurrency
        });

    document.querySelector("#valor-para").textContent =
        convertedValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: toCurrency
        });
}

convertButton.addEventListener("click", convertValues);



