document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // não envia até validar

    let nome = document.getElementById("nome").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let rating = document.querySelector("input[name='rating']:checked");

    // REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^[0-9\s()+-]{8,20}$/;

    // Nome e sobrenome: apenas letras e espaços
    const somenteLetrasRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;

    // ---- VALIDAÇÕES ----

    // Nome
    if (nome.length < 2) {
        alert("Digite um nome válido.");
        return;
    }
    if (!somenteLetrasRegex.test(nome)) {
        alert("Nome não pode conter números ou símbolos.");
        return;
    }

    // Sobrenome
    if (sobrenome.length < 2) {
        alert("Digite um sobrenome válido.");
        return;
    }
    if (!somenteLetrasRegex.test(sobrenome)) {
        alert("Sobrenome não pode conter números ou símbolos.");
        return;
    }

    // E-mail
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Telefone (opcional)
    if (telefone !== "" && !telefoneRegex.test(telefone)) {
        alert("Digite um telefone válido ou deixe em branco.");
        return;
    }

    // Rating
    if (!rating) {
        alert("Por favor, selecione uma avaliação.");
        return;
    }

    // SUCESSO
    alert("Formulário enviado com sucesso!");
    document.getElementById("contactForm").reset();
});
