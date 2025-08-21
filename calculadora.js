const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const select = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
const resposta = document.querySelector("#resposta");

botao.addEventListener("click", calcular);

function calcular() {
    const valor1 = parseFloat(campo1.value);
    const valor2 = parseFloat(campo2.value);
    const operacao = select.value;
    let resultado;

    // Verifica se os valores são números válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        resposta.textContent = "Digite números válidos!";
        resposta.classList.add("erro");
        return;
    }

    resposta.classList.remove("erro");

    // Realiza a operação escolhida
    switch (operacao) {
        case "somar":
            resultado = valor1 + valor2;
            break;
        case "subtrair":
            resultado = valor1 - valor2;
            break;
        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            if (valor2 === 0) {
                resposta.textContent = "Não é possível dividir por zero!";
                resposta.classList.add("erro");
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            resposta.textContent = "Escolha uma operação válida!";
            resposta.classList.add("erro");
            return;
    }

    resposta.textContent = `Resultado: ${resultado}`;
}
