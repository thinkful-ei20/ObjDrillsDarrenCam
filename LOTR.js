'use strict';

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'Wizardstaff and Glamdring',  10, 6), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1), 
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'Sting and Barrow Blade', 3, 2), 
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8), 
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5), 
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 6, 5), 
];

function createCharacter(name,nickname,race,origin,weapon,attack,defense){
  return {
    name,nickname,race,origin,weapon, attack,defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`);
    },
    evaluateFight: function(character){
      if (this.defense > character.attack || character.defense > this.attack) {
        return 'Takes 0 damage';
      } else {
        return `Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack - this.defense} damage`;
      }
    }
  };
}

// const gandalf = createCharacter('Gandalf','the grey','Wizard','Middle Earth', 10,6);

// gandalf.describe();

// characters.find(char => char.nickname === 'aragorn').describe();

const hobbitChars = characters.filter(char => char.race === 'Hobbit');

// console.log(hobbitChars);

// const strongChars = characters.filter(char => char.attack > 5).forEach(char => console.log(char.name));

characters.forEach(char => char.describe());


