document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    // Interrompe o envio padrão do formulário
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica adicional via JavaScript
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de formato de e-mail por Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // --- Simulação de envio bem-sucedido ---
    // Remove o formulário da tela com suavidade
    this.style.display = 'none';

    // Exibe a mensagem de sucesso
    const feedback = document.getElementById('feedbackSucesso');
    feedback.style.display = 'block';

    // Opcional: Limpa os campos do formulário para um próximo uso
    this.reset();
});
