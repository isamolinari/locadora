/*
 * locadora.js - Lógica de simulação de locação
 */

// Objeto para rastrear o status de cada filme
const statusFilmes = {};

function simularLocacao(filmeId, tipoAcao) {
    const statusElement = document.getElementById(`status-${filmeId}`);
    
    if (!statusElement) {
        console.error("Elemento de status não encontrado para:", filmeId);
        return;
    }

    let mensagem = "";
    
    // Se já foi vendido
    if (statusFilmes[filmeId] === 1) {
        mensagem = `ERRO: Este filme já foi VENDIDO e não está mais disponível.`;
        statusElement.textContent = mensagem;
        statusElement.classList.add('status-vendido');
        return;
    }

    // Emprestar
    if (tipoAcao === 'Emprestar') {
        mensagem = `SIMULAÇÃO: O filme foi EMPRESTADO com sucesso por R$ 5,00. Aproveite!`;
        statusFilmes[filmeId] = 2; // Status: Emprestado
        statusElement.classList.remove('status-vendido');
    } 
    // Vender
    else if (tipoAcao === 'Vender') {
        mensagem = `SIMULAÇÃO: Parabéns! Você VENDEU este filme por R$ 30,00. Estoque esgotado!`;
        statusFilmes[filmeId] = 1; // Status: Vendido
        statusElement.classList.add('status-vendido');

        // Desabilitar os botões
        const botoes = statusElement.closest('.locadora-actions').querySelectorAll('button');
        botoes.forEach(btn => btn.disabled = true);
    }
    
    // Atualiza mensagem
    statusElement.textContent = mensagem;

    // Feedback rápido
    alert(mensagem);
}
