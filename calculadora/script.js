// Pegando a tela
let tela = document.getElementById("tela");

// Função para adicionar números ou sinais
function adicionar(valor) {
  tela.value += valor;
  // += significa: "pega o que já tem e adiciona mais"
}

// Função para limpar tudo
function limpar() {
  tela.value = "";
}

// Função para calcular
function calcular() {
  try {
    tela.value = eval(tela.value);
    // eval resolve a conta (ex: "2+2")
  } catch {
    tela.value = "Erro";
  }
}