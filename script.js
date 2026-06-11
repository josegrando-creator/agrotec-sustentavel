
// ====================== CERTIFICADO AGRINHO 2026 ======================

const nomeAluno = "José Francisco Debas Grando";

// Função principal para gerar o certificado
function gerarCertificado(nome = nomeAluno) {
    // Atualiza o nome no certificado
    const nomeElement = document.getElementById('nome-aluno');
    if (nomeElement) {
        nomeElement.textContent = nome.toUpperCase();
    }

    // Adiciona data atual
    const dataElement = document.getElementById('data-certificado');
    if (dataElement) {
        const data = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dataElement.textContent = data.toLocaleDateString('pt-BR', options);
    }

    console.log(`✅ Certificado gerado com sucesso para: ${nome}`);
}

// Função para imprimir o certificado
function imprimirCertificado() {
    window.print();
}

// Função com confetes (efeito especial)
function lancarConfetes() {
    const colors = ['#0f5c2e', '#1a8f4e', '#d4af37', '#fff'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confete = document.createElement('div');
            confete.className = 'confete';
            confete.style.left = Math.random() * 100 + 'vw';
            confete.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confete.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confete.style.opacity = Math.random() + 0.5;
            confete.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            document.body.appendChild(confete);

            setTimeout(() => {
                confete.remove();
            }, 5000);
        }, i * 8);
    }
}

// Adiciona estilos dos confetes
function adicionarEstilosConfetes() {
    const style = document.createElement('style');
    style.textContent = `
        .confete {
            position: fixed;
            top: -20px;
            width: 12px;
            height: 12px;
            z-index: 9999;
            animation: cair 4s linear forwards;
            pointer-events: none;
        }
        @keyframes cair {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Inicialização automática
document.addEventListener('DOMContentLoaded', () => {
    adicionarEstilosConfetes();
    gerarCertificado(nomeAluno);
    
    // Exemplo: botão para gerar com nome personalizado
    const botaoGerar = document.getElementById('btn-gerar');
   
