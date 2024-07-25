var tabuleiro;
var board;
var aviso;
var jogador;
var lin, col;
var jogadorGanhou = false;

function inicia() {
  tabuleiro = new Array(3);
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let i = 0; i < 3; i++) tabuleiro[i] = new Array(3);

  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) tabuleiro[i][j] = 0;

  exibe();
}

function exibe() {
  HTML = '<table  cellpadding="25" border="3">';
  for (let i = 0; i < 3; i++) {
    HTML += "<tr>";
    for (let j = 0; j < 3; j++) {
      HTML += '<td class="cell ';
      if (tabuleiro[i][j] == 1) {
        HTML += "marcacaoX";
      } else if (tabuleiro[i][j] == -1) {
        HTML += "marcacaoO";
      }
      HTML += '" onclick="lin = ' + i + "; col = " + j + '; jogar();">';
      if (tabuleiro[i][j] == 0) HTML += "<span> __ </span>";
      else if (tabuleiro[i][j] == 1) HTML += "<span> X </span>";
      else HTML += "<span> O </span>";
      HTML += "</td>";
    }
    HTML += "</tr>";
  }
  HTML += "</table><br />";
  board.innerHTML = HTML;
}

function jogar() {
  if (jogadorGanhou == true) {
    return 0;
   
  }

  aviso.innerHTML = " Vez do jogador: " + ((jogador % 2) + 1);

  if (tabuleiro[lin][col] == 0) {
    if (jogador % 2) tabuleiro[lin][col] = 1;
    else tabuleiro[lin][col] = -1;

    jogador++;
    exibe();
    checa();
  }
}

function checa() {
  var soma;

  //Linhas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Linha " +
        (i + 1) +
        " preenchida! Reinicie o jogo para jogar novamente!";
      jogadorGanhou = true;
    
    }
  }

  //Colunas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Coluna " +
        (i + 1) +
        " preenchida! Reinicie o jogo para jogar novamente!";
      jogadorGanhou = true;
    }
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida! Reinicie o jogo para jogar novamente!";
    jogadorGanhou = true;
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida! Reinicie o jogo para jogar novamente!";
    jogadorGanhou = true;
  }
}

function reiniciaJogo() {
  jogador = 1;
  jogadorGanhou = false;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }
  aviso.innerHTML = "Jogo Reiniciado";

  exibe();
}
