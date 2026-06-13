// Aguarda todo o conteúdo da página carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    
    /* ==========================================================================
       1. MANIPULAÇÃO DO FORMULÁRIO DE CONTATO
       ========================================================================== */
    const formulario = document.getElementById("meuFormulario");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede que a página recarregue ao enviar o formulário
            evento.preventDefault();

            // Captura os valores digitados pelo usuário
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação simples de segurança
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            // Exibe a mensagem de sucesso estilizada na tela
            mensagemSucesso.innerHTML = `✨ Obrigado pelo contato, <strong>${nome}</strong>! Sua mensagem sobre a tecnologia na agricultura foi recebida com sucesso.`;
            mensagemSucesso.style.display = "block";

            // Limpa os campos do formulário após o envio
            formulario.reset();

            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemSucesso.style.display = "none";
            }, 5000);
        });
    }

    /* ==========================================================================
       2. EFEITO DE ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
       ========================================================================== */
    // Seleciona todas as seções de conteúdo e os cards para animar
    const elementosParaAnimar = document.querySelectorAll('.conteudo-sec, .card');

    // Configura o observador para detectar quando o elemento aparece na tela
    const observadorOpcoes = {
        root: null, // Usa a própria tela do navegador como referência
        threshold: 0.15, // Ativa a animação quando 15% do elemento estiver visível
        rootMargin: "0px"
    };

    const observador = new IntersectionObserver(function (entradas, observador) {
        entradas.forEach(entrada => {
            // Se o elemento estiver visível na tela, adiciona a classe de animação
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
                // Para de observar o elemento após ele já ter aparecido
                observador.unobserve(entrada.target);
            }
        });
    }, observadorOpcoes);

    // Aplica o estilo inicial (escondido) e começa a observar cada elemento
    elementosParaAnimar.forEach(elemento => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(30px)";
        elemento.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observador.observe(elemento);
    });

});