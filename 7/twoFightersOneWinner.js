class Fighter {
    constructor(name,health,damagePerAttack){
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack
    }

     toString =()=>{
        console.log(`name : ${this.name} , health : ${this.health} , damagePerAttack : ${this.damagePerAttack}`)
    }

}

const fighter1 = new Fighter("Lew", 10, 2)
const fighter2 = new Fighter("Harry", 5, 4)


fighter1.toString()
fighter2.toString()


const declareWinner = (fighter1, fighter2,firstAttacker) => {

    let f1h = fighter1.health
    let f1d = fighter1.damagePerAttack

    let f2h = fighter2.health
    let f2d = fighter2.damagePerAttack

    let attacker = fighter1.name===firstAttacker ? "f1" : "f2"

    while(f1h > 0 || f2h>0){
        if(attacker==="f1"){
            f2h = f2h - f1d
            attacker = "f2"
        }else{
            f1h = f1h - f2d
            attacker = "f1"
        }
    }

    return attacker==="f1"?fighter1.name:fighter2.name
}


console.log(declareWinner(fighter1,fighter2,"Lew"))