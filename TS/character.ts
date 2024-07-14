export default class Character{
    public name: string;
    public life: number;
    public energy: number;
    public attack: number;
    public defense: number;

    constructor(name: string, life: number, energy: number, attack:number, defense: number){
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }

    //Métodos

    TrainAttack(): void{
        this.energy = Math.min(this.energy + Math.random() * 4, 100);
        this.attack = Math.min(this.attack + Math.random() * 4, 100);
    }

    TrainDefense(): void{
        this.defense = Math.min(this.defense + Math.random() * 3, 100);
        this.energy = Math.max(this.energy - Math.random() * 2, 0);
    }

    Rest(hours: number):void{
        this.energy = Math.min(this.energy + hours * Math.random() * 6, 100);
    }

    Battle():void{
        this.life -= Math.random() * 8;
        this.energy = Math.max(this.energy - Math.random() * 5, 0);
        this.defense = Math.max(this.defense - Math.random() * 5, 0);
        this.isDead();
    }

    isDead(): boolean{
        if(this.life <= 0){
            console.log("You're dead!");
            
            return true;
        } else{
            return false;
        }
    }

    status(): string {
        return `
        Character:
        Name: ${this.name}
        Energy: ${this.energy.toFixed(1)}
        Attack: ${this.attack.toFixed(1)}
        Defense: ${this.defense.toFixed(1)}
        `;
    }

}