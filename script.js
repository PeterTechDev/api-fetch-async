// USANDO FETCH
// let url = "http://api.exchangeratesapi.io/v1/latest?access_key=6a2a1a0bb49583c49a02805dcdfe42eb"

// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.rates.BRL);
//     })

// function convert() {
//     let input = document.getElementById('value');
//     let value = input.value

//     fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then((data) => {
//             let rate = data.rates.BRL;
//             document.getElementById('result').innerHTML = `${value} euros = ${parseFloat(rate * value).toFixed(2)} em reais`;
//         })


// }

// USANDO ASYNC AWAIT
let url = "https://economia.awesomeapi.com.br/usd-brl"

async function convert() {
    let value = document.getElementById('value').value

    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    let rate = data[0].ask;
    console.log(rate);

    document.getElementById('result').innerHTML = `${value} dolares = ${(rate * value).toFixed(2)} em reais`;

}
// TODO: adicionar a API do async no fetch