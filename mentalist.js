function atualizaDificuldade() {
    let select = document.querySelector("#dificuldade");
    let dificuldadeOptions = select.options[select.selectedIndex];
  
    let dificuldade = dificuldadeOptions.value;
  
    switch (dificuldade) {
      case "1":
        totalTentativas = 15;
        break;
      case "2":
        totalTentativas = 10;
        break;
      case "3":
        totalTentativas = 5;
        break;
    }
    return dificuldade;
  }
  
  function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    var maior = chute > numSecreto;
  
    if (chute == numSecreto) {
      elementoResultado.innerHTML =
        "Vejo que você acertou... O número secreto era " +
        numSecreto +
        "<br>" +
        "Aceitaria um novo desafio???";
      return Bloquear();
    } else if (chute > 100 || chute < 0) {
      elementoResultado.innerHTML = "Por favor, digitar um número entre 0 e 10!";
      tentativa--;
    } else if (maior) {
      elementoResultado.innerHTML = "Seu chute foi maior que o número secreto.";
    } else {
      elementoResultado.innerHTML = "Seu chute foi menor que o número secreto.";
    }
  
    return Tentativas();
  }
  
  function Tentativas() {
    var elementoTentativa = document.getElementById("tentativa");
  
    elementoTentativa.innerHTML =
      "Tentativa " + tentativa + " de " + totalTentativas;
    tentativa++;
  
    if (tentativa > totalTentativas) {
      elementoTentativa.innerHTML =
        "Você realmente não é tão inteligente quanto eu pensei que fosse. Reinicie e tente novamente.";
      return Bloquear();
    }
  }
  
  function Bloquear() {
    document.getElementById("botaoChute").disabled = true;
  }
  
  function Reiniciar() {
    window.location.href = window.location.href;
  }
  
  var numSecreto = Math.floor(Math.random() * 101);
  var totalTentativas;
  var tentativa = 1;
  let dificuldade = atualizaDificuldade();
  