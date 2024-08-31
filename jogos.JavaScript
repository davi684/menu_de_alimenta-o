document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('data-tab');

      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetId) {
          content.classList.add('active');
        }
      });
    });
  });

  let jogoIdAtual = null;

  document.querySelectorAll('.jogo').forEach(jogo => {
    jogo.addEventListener('click', function () {
      jogoIdAtual = this.getAttribute('data-id');
      const jogoTitulo = this.querySelector('h3').textContent;
      const jogoPreco = this.querySelector('p').textContent;
      document.querySelector('#jogoSelecionado').textContent = `Você selecionou: ${jogoTitulo} - ${jogoPreco}`;
      document.querySelector('#comprar').style.display = 'block';
    });
  });

  document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Compra finalizada com sucesso!');
    document.querySelector('#comprar').style.display = 'none';
  });
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obter valores dos campos
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar credenciais
  if (username === 'Davi' && password === '1234') {
    // Login bem-sucedido
    alert('Login bem-sucedido!');
    window.location.href = 'index.html'; // Redireciona para a página principal
  } else {
    // Falha no login
    document.getElementById('error-message').textContent = 'Nome de usuário ou senha incorretos.';
    document.getElementById('error-message').style.display = 'block';
  }
});
