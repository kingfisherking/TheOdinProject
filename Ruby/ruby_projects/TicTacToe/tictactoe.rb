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
  def display_row(row)
    num = row*3 #row 0: 0 1 and 2, row 1: 3 4 and 5, etc
    one = @slots[num] ? @slots[num] : " "
    two = @slots[num+1] ? @slots[num+1] : " "
    three = @slots[num+2] ? @slots[num+2] : " "
    puts "#{one} | #{two} | #{three}"
  end
  def display_bound
    puts '–––––––––'
  end
  def display #I want a method to display the state of the board
    self.display_row(0)
    self.display_bound
    self.display_row(1)
    self.display_bound
    self.display_row(2)
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