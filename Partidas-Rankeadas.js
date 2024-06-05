let QtdVitorias = 101
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
function saldoVitorias(){
    if (QtdVitorias <= 10){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[0]}`)
    } else if (QtdVitorias == 11 && QtdVitorias <= 20){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[1]}`) 
    } else if (QtdVitorias >= 21 && QtdVitorias <= 50){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[2]}`)
    } else if (QtdVitorias >= 51 && QtdVitorias <= 80){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[3]}`)
    } else if (QtdVitorias >= 81 && QtdVitorias <= 90){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[4]}`)
    } else if (QtdVitorias >= 91 && QtdVitorias <= 100){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[5]}`)
    } else if (QtdVitorias >= 101){
        console.log(`O herói tem saldo de: ${QtdVitorias}. Está no nível ${nivel[6]}`)
    }
}

saldoVitorias()
