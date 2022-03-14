function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    var maior = chute > numSecreto;

    if (chute == numSecreto){
        elementoResultado.innerHTML = "Parabéns, você acertou! o número secreto era " +numSecreto;
    } else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Por favor, digitar um número entre 0 e 10!"
        tentativa--;
    } else if (maior) {
        elementoResultado.innerHTML = "Seu chute foi maior que o número secreto.";
    } else {
        elementoResultado.innerHTML = "Seu chute foi menor que o número secreto.";
    }

    return Tentativas();
}

function Tentativas(){   
    var elementoTentativa = document.getElementById("tentativa");

    elementoTentativa.innerHTML = "Tentativa " + tentativa + " de " + totalTentativas;
    tentativa++;

    if (tentativa>totalTentativas){
        elementoTentativa.innerHTML = "Total de tentativas excedido! Por favor, reinicie e tente novamente.";
        return Bloquear();
    }
}

function Bloquear(){ 
    document.getElementById("botaoChute").disabled = true;
}

function Reiniciar(){
    document.location.reload();   
}

var numSecreto = Math.floor(Math.random()*101);
var totalTentativas;
var tentativa = 1; 

var select = document.getElementById("dificuldade");
select.addEventListener('change', function(){
    console.log(select.value)
})