Character Training Game
This project is a simple Character Training Game implemented in TypeScript. The game allows players to manage a character named Lorien by training attack and defense, resting to regain energy, and engaging in battles. The goal is to keep the character alive and improve its stats through various actions.

Features
Character Class: A class that represents a character with attributes such as name, life, energy, attack, and defense.
Training Attack: Increases the character's attack and energy up to a maximum of 100.
Training Defense: Increases the character's defense and decreases energy.
Resting: Increases the character's energy based on the number of hours rested.
Battling: Decreases the character's life, energy, and defense through simulated battles.
Status Display: Shows the current status of the character including name, energy, attack, and defense.
Death Check: Checks if the character's life has reached zero and prints a death message if so.
Game Loop
The game runs in a loop where the player can choose actions from a menu.
Actions include training attack, training defense, resting, battling, checking status, and exiting the game.
The game continues until the player chooses to exit or the character dies.

Usage
Start the Game: The game starts with the creation of a character named Lorien with initial attributes.
Choose Actions: The player is prompted to choose actions from the menu to train the character or engage in battles.
View Status: The player can check the character's status at any time to see the current stats.
Exit: The player can exit the game by selecting the exit option.
