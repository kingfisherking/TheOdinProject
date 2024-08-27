class Board
  def initialize
    @slots = Array.new(9)
    @combos = [
      [0, 1, 2], [3, 4, 5],
      [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8],
      [2, 4, 6], [0, 4, 8]
    ]
  end
  def display
    puts "#{}"
  end

  def make_mark(XorO, place) #a method to put a mark down on the board
    @slots[place] = XorO
  end
end

class Game
  def initialize
    @turn = true #P1 or X is true, P2 or O is false
  end

  def get_turn
    @turn
  end

  def change_turn
    @turn = !@turn
  end
  
  def take_turn
  end

  #I want a method to take a turn
  def start
    board = Board.new
  end

end