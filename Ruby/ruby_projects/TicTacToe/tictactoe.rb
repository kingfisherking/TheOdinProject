class Board
  def initialize
    @slots = Array.new(9)
    @guide = {
      "topleft": 0, "top": 1,
      "topright": 2, "left" 3,
      "center": 4, "right": 5,
      "botleft": 6, "bottom" 7, "botright": 8}
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
  def guide
    @guide
  end
  def guide(choice) #return the number that corresponds to the player choice
    @guide[choice]
  end

  def get_mark(place)
    @slots[place]
  end
  def make_mark(XorO, place) #a method to put a mark down on the board
    @slots[place] = XorO if !@slots[place]
    self.display
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
  #prompt play, convert choice, check if mark is there, add mark or reject
  def take_turn(board)
    puts "choose where you want to put your mark"
    choice = gets.chomp
    if board.guide.keys.include?(choice)
      location = board.guide(choice)
      if board.get_mark(location) #if the location isn't nil, reject
        puts "Already a mark there"
      else
        board.make_mark(self.get_turn, location)
      end
    else
      puts "not recognize location"
    end
  end

  #I want a method to take a turn
  
  def start
    board = Board.new
  end

end