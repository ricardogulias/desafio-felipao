let nomeHeroi = "Ricardo";
let quantidadeXP = 12000;
let qualificacaoHeroi;

if (quantidadeXP <= 1000) {
    qualificacaoHeroi = "Ferro";
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
    qualificacaoHeroi = "Bronze";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    qualificacaoHeroi = "Prata";
} else if (quantidadeXP >= 6001 && quantidadeXP <= 7000) {
    qualificacaoHeroi = "Ouro";
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    qualificacaoHeroi = "Platina Diamante";
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    qualificacaoHeroi = "Ascendente";
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
        qualificacaoHeroi = "Imortal";
} else if (quantidadeXP >= 10001) {
    qualificacaoHeroi = "Radiante";
}
console.log("O Heroi " + nomeHeroi + " tem " + quantidadeXP + " XPs e sua classificação é " + qualificacaoHeroi + ".");


