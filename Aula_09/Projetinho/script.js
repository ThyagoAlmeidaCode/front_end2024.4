



// Função para iniciar a animação
document.getElementById('startAnimationBtn').addEventListener('click', function() {
    
    // Exibe o agente do Minecraft com animação
    const agent = document.getElementById('minecraft-agent');

    /* agent.style.opacity = 1; */
    agent.style.transform = 'translateY(0)';

    if (agent.style.opacity == 0){
        agent.style.opacity = 1
    }else{
        agent.style.opacity = 0
    }
});
