class SuperSmashBros {
    constructor(fighterName, uniform, mainWeapon, basicAttackName, basicAttackDamage, fighterJumpAttack, fighterJumpAttackDamage, fighterUniverse, livesLeft) {
        this.name = fighterName
        this.color = uniform
        this.weapon = mainWeapon
        this.defaultAttack = basicAttackName
        this.attackDamage = basicAttackDamage
        this.jumpmove = fighterJumpAttack
        this.jumphit = fighterJumpAttackDamage
        this.universe = fighterUniverse
        this.lives = livesLeft
        this.health = 0
    }
    knockedOffStage() {
        alert('AHHHHHHHHHHHHHHH!')
    }
    healthPercentage() {
        return `${this.name} has ${this.health} health percentage on the board.`
    }



    basicAttack(target) {
        if (target.health >= 0 && target.health < 100) {
            const basicDamage = this.attackDamage
            console.log(`${this.name} attacked ${target.name} and caused ${basicDamage} damage points`)
            target.health += basicDamage
        }
        else if (target.health >= 100) {
            console.log(`${this.name} knocked off ${target.name}`)
            target.lives -= 1
            console.log(`${target.name} has ${target.lives} lives left`)
        }
        else if (target.lives === 0) {
            console.log(`${this.name} has been knocked out and cant attack anymore.`)


        }


    }
}

const link = new SuperSmashBros('Link', 'Zora Blue Tunic', 'Master Sword', 'Sword Swing', 15, 'Jumping Spin Slash', 25, 'Legend of Zelda', 5)

const starfox = new SuperSmashBros('Star Fox', 'White Vest with green pants', 'Kung Fu', 'Rapid Kick', 10, 'Fiery Rocket Jump', 25, 'Star Fox Universe', 5)

const mario = new SuperSmashBros('Super Mario Bros.', 'Classic Red Look', 'Hands and feet', 'Punch & Kicks', 15, 'Uppercut Punch', 25, 'Mario Bros Universe', 5)

console.log(link)
console.log(starfox)
console.log(mario)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)
starfox.basicAttack(link)

console.log(link.healthPercentage())

