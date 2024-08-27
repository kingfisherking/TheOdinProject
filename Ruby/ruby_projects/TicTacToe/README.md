# Tic-Tac-Toe Project
## -- TheOdinProject --

Here's where I'm essentially going to map out what I'm thinking for the design
I just went over a class/module/object review and it seems like that's what is prompted

I'm thinking there's going to be
~~an object for each X or O~~
~~and object for the game board~~
~~maybe the gameboard object handles the game logic~~
there's going to be a game board object and a game logic object

Maybe the game loop uses a boolean to control p1/p2
a list of possible winning combos that is checked to see if there is a winner

maybe the module can handle game logic or structure
like a checking module that automatically keeps track of which spaces are open
so that in the game loop, there's a reference that can be output to console easly

game logic:
new game is created, P1 goes first, then P2, then so on
Game checks if game board contains 3 in a row
if yes, winner announced, if no keep going until there are no more open spots
end game if no more open spots
ask if you want to play again


0 | 1 | 2
–––––––––
3 | 4 | 5
–––––––––
6 | 7 | 8