


# ## Board object
# slots for each mark
# winner variable (should I make this nil instead of false?)
# hash that converts position to slot number
# combinations for checking winner

# method to get the winner
# #return winner
# change the winner
# #winner = !winner
# check the winner
# #for every combo in combolist
# #get slots for combo
# #if the slots are all the same, there's a winner
# #the winner is the var in all the slots
# #return nil for no winner, true for p1, false for p2
# display the board current
# #puts the first line, then the second, third, zhush it up
# convert method guide to mark
# #this is assuming that the player is only allowed to type specific things
# #return the value of the key, the key is the player input
# make mark (set)
# #check if slot is marked (get mark)
# #if slot isn't marked, add the players mark (turn)
# #if is, output error message
# get mark
# #I guess I should put this one first
# #return the slot at the specific index
# #maybe I'll need the conversion method
# I have a tie method, but maybe I wont need it.



# Game object, keeps track of game logic
# turn var to keep track
# input list to keep track of acceptable inputs

# get the current turn
# # return turn
# change turn
# #turn = !turn
# get player input
# #gets.chomp "choose from list" var inputlist
# check player input
# #if input is in inputlist, continue/true/ok, if not then output error
# take turn method
# #prompt player based on turn, false is p2 p1 is true
# #get player input 
# #board method make mark
# #check winner
# #change turn if no winner, if yes winner end game
# start a new game
# #create new board object
# #take turn until winner announced
#announce winner
# #if true, p1 wins, if flase p2 wins, if nil tie game
# haven't thought everything out