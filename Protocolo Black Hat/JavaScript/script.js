let lvl = 1;
let currentSum = 0;
let targetSum = 0;

// COMANDOS E SUAS RESPECTIVAS PRÓXIMAS DICAS
const missions = {
    1: { cmd: "help", msg: "Acesso aos comandos liberado.", next: "scan" },
    2: { cmd: "scan", msg: "Vulnerabilidades mapeadas.", next: "proxy" },
    3: { cmd: "proxy", msg: "Identidade camuflada com sucesso.", next: "crack" },
    4: { cmd: "crack", msg: "Senha do servidor quebrada.", next: "bypass" },
    5: { cmd: "bypass", msg: "Firewall contornado.", next: "root" },
    6: { cmd: "root", msg: "Privilégios de administrador ativos.", next: "stealth" },
    7: { cmd: "stealth", msg: "Modo invisível ligado.", next: "vault" },
    8: { cmd: "vault", msg: "Cofre de dados aberto.", next: "nuke" },
    9: { cmd: "nuke", msg: "Logs de acesso deletados.", next: "trace" },
    10: { cmd: "trace", msg: "Localização do servidor confirmada.", next: "crypt" },
    11: { cmd: "crypt", msg: "Chaves mestras geradas.", next: "mask" },
    12: { cmd: "mask", msg: "IP fantasma configurado.", next: "inject" },
    13: { cmd: "inject", msg: "Injeção SQL completa.", next: "shadow" },
    14: { cmd: "shadow", msg: "Rede Shadow acessada.", next: "matrix" },
    15: { cmd: "matrix", msg: "Código fonte revelado.", next: "uplink" },
    16: { cmd: "uplink", msg: "Sincronização satélite OK.", next: "ghost" },
    17: { cmd: "ghost", msg: "Rastro digital zero.", next: "decrypt" },
    18: { cmd: "decrypt", msg: "Arquivos secretos descriptografados.", next: "override" },
    19: { cmd: "override", msg: "Sistemas manuais assumidos.", next: "final" },
    20: { cmd: "final", msg: "EXTRAÇÃO INICIADA! Resolva o backup.", next: null }
};

const input = document.getElementById('cmd-input');
const output = document.getElementById('terminal-output');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = input.value.toLowerCase().trim();
        checkCommand(val);
        input.value = '';
    }
});

function log(text, color = "var(--green)") {
    const div = document.createElement('div');
    div.innerHTML = `<span style="color: ${color}">> ${text}</span>`;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
}

function checkCommand(val) {
    if (missions[lvl] && val === missions[lvl].cmd) {
        log(missions[lvl].msg);
        
        if (lvl < 20) {
            lvl++;
            document.getElementById('lvl-num').innerText = lvl;
            document.getElementById('xp-fill').style.width = (lvl * 5) + "%";
            // MOSTRA A PRÓXIMA DICA
            log(`[DICA] Próximo comando: <span class="white">'${missions[lvl-1].next}'</span>`, "var(--yellow)");
        } else {
            log("SISTEMA BLOQUEADO. ABRINDO BACKUP...", "var(--yellow)");
            setTimeout(abrirBackup, 1000);
        }
    } else {
        log("[ERRO] Comando inválido para o nível " + lvl, "#ff3333");
    }
}

function abrirBackup() {
    document.getElementById('modal-backup').classList.remove('hidden');
    targetSum = Math.floor(Math.random() * 21) + 25;
    document.getElementById('target-sum').innerText = targetSum;
    
    const grid = document.getElementById('number-grid');
    grid.innerHTML = '';
    for(let i=0; i<9; i++) {
        let n = Math.floor(Math.random() * 10) + 1;
        let btn = document.createElement('button');
        btn.className = 'num-btn';
        btn.innerText = n;
        btn.onclick = () => {
            btn.classList.toggle('active');
            atualizarSoma();
        };
        grid.appendChild(btn);
    }
}

function atualizarSoma() {
    currentSum = 0;
    document.querySelectorAll('.num-btn.active').forEach(b => currentSum += parseInt(b.innerText));
    document.getElementById('current-sum').innerText = currentSum;
}

function resetSoma() {
    document.querySelectorAll('.num-btn').forEach(b => b.classList.remove('active'));
    currentSum = 0;
    document.getElementById('current-sum').innerText = "0";
}

function verificarSoma() {
    if (currentSum === targetSum) {
        document.getElementById('modal-backup').classList.add('hidden');
        document.getElementById('modal-final').classList.remove('hidden');
    } else {
        log("SOMA INCORRETA!", "#ff3333");
        resetSoma();
    }
}

function irParaSite() {
    window.location.href = "https://sthofficially.github.io/Desenvolvedor-Web/CodeSth/";
}