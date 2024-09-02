async function getWeather() {
    //Variavel que pega o valor do Input cidade
    var cidade = document.getElementById('cidade').value


    //Conectando a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir o JSON do item temperatura
    var TempCelsius = resposta.data.main.temp;

    console.log(TempCelsius)
    //Imprimir na tela fornt-end utilizando JQUERY
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${TempCelsius.toFixed(0)} °C`


}  
//Chamar a Função
getWeather()