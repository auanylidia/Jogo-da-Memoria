// Seleciona o botão e os inputs
const startGameButton = document.getElementById("startGame");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

// Adiciona evento de clique ao botão
startGameButton.addEventListener("click", () => {
  // Captura os nomes dos jogadores
  const player1 = player1Input.value.trim();
  const player2 = player2Input.value.trim();

  // Verifica se os campos foram preenchidos
  if (!player1 || !player2) {
    alert("Por favor, preencha os nomes dos dois jogadores.");
    return;
  }

  // Salva os nomes no localStorage
  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);

  // Redireciona para a página do jogo
  window.location.href = 'index.html'; // Altere para o caminho correto da página do jogo
});
