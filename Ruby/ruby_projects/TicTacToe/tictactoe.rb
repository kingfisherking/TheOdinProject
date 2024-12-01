class Board
  def initialize
    @slots = Array.new(9)
    @winner = nil
    @position = {
      "topleft": 0, "top": 1,
      "topright": 2, "left": 3,
      "center": 4, "right": 5,
      "botleft": 6, "bottom": 7, "botright": 8}
    @combos = [
      [0, 1, 2], [3, 4, 5],
      [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8],
      [2, 4, 6], [0, 4, 8]
    ]
  end
  def empty?
    @slots.any? {|slot| !slot.nil?}
  end

  def get_winner
    @winner
  end

  def change_winner(bool)
    @winner = bool
  end

  def get_mark(number)
    @slots[number]
  end

  def make_mark(turn, place)
    if @slots[place] 
      puts "already mark there"
    else
      @slots[place] = turn
    end
  end

  def conversion(input)
    if @position.key?(input)
      @position[input]
    else
      puts "input not found in guide"
    end
  end

  def trio(arr)
    if @slots[arr[0]] ==  @slots[arr[1]] && @slots[arr[1]] ==  @slots[arr[2]]
      unless @slots[arr[0]] == nil
        return @slots[arr[0]]
      end
    end
    return nil
  end

  def check_winner() #thinking about making a method to get a place
    @combos.each do |combo| #thinking about method to check a single trio
      unless trio(combo).nil?
        win_message = trio(combo) ? "P1 Wins!" : "P2 Wins"
        self.change_winner(true)
        puts win_message
      else
        if self.is_full?
          self.change_winner(false)
          puts "nobody wins, tie game!"
        end
      end
    end
  end

  
end


# ## Board object
# slots for each mark, 9 slots prefilled with nil
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
# display current board
# #slot0 | slot1 | slot2
# #if slot [number] isn't nil, display the slot contents 
# #or convert nil to " "
#method to check if board game is full
#I can add this to mark and check winner

class Game
  def initialize
    @turn = true  #this can swap every round, p1 = true, p2 = false
    @inputs = Board.new.keys() #if its not in this list, its not fair game
  end

  def turn
    @turn
  end

  def change_turn
    @turn = !@turn
  end
  def player_input
    puts "Enter where you want to mark"
    input = gets.chomp
    if @inputs.include?(input)
      return input
    end
    return nil
  end
end

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
#maybe check winner for board obj is a bool to keep track of if winner exists
#maybe it changes the bool but returns the winner, so it can return nil
#and a separate game logic, like announce winner, converts it to tie/win
#check winner also checks if there's a tie I guess?

#test = Board.new

#no clue where I left off, please try again
#where I left off: weird git messages
#weird git messages fixed