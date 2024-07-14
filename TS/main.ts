import Character from "./character";
import prompt from 'prompt-sync';

let Lorien: Character = new Character('Lorien', 100, 100, 30, 25);

let keyboard = prompt();

let option: number = 0;

while(option !== 9 || Lorien.isDead()){
    console.log("============== Character ==============");
    console.log("|1. Train Attack |");
    console.log("|2. Train Defense |");
    console.log("|3. Rest |");
    console.log("|4. Battle |");
    console.log("|8. Status |");
    console.log("|9. Exit |");
    
    option = +keyboard("Escolha uma opção: ");

    switch (option) {
        case 1:
            Lorien.TrainAttack();
            console.log(Lorien.status());
            break;

        case 2:
            Lorien.TrainDefense();
            console.log(Lorien.status());
            break;

        case 3:
            let rest: number = +keyboard("Inform how many hours rested: ");
            Lorien.Rest(rest);
            console.log(Lorien.status());
            break;

        case 4: 
            Lorien.Battle();
            console.log(Lorien.status());
            break;

        case 8:
            console.log(Lorien.status());
            break;
        
        case 9:
            console.log("Shutting Down...");
            if(option === 9){
                break;
            }
            break;
    
        default:
            console.log("Invalid Option!");
            break;
    }
}