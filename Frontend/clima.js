const key = "18d4c68138a2f6f3a8477710d738d5be";

async function buscarCidade(cidade) {

    try {

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
        );

        const dados = await res.json();

        if (dados.cod == "404") {
            alert("Cidade não encontrada");
            return;
        }

        colocarDadosNaTela(dados);

    } catch (erro) {

        console.log("Erro ao buscar cidade:", erro);

    }
}

function colocarDadosNaTela(dados) {

    document.querySelector(".cidade").textContent =
        "Tempo em " + dados.name;

    document.querySelector(".temp").textContent =
        Math.floor(dados.main.temp) + "°C";

    document.querySelector(".texto-previsao").textContent =
        dados.weather[0].description;

    document.querySelector(".umidade").textContent =
        "Umidade: " + dados.main.humidity + "%";

    document.querySelector(".img-previsao").src =
        `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

function cliquenoBotao() {

    const cidade =
        document.querySelector(".input-cidade").value;

    if (cidade.trim() !== "") {
        buscarCidade(cidade);
    }
}


document
    .querySelector(".input-cidade")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            cliquenoBotao();
        }

    });
