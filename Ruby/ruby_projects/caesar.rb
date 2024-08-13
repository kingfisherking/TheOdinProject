

def caesar(message, offset)
  alpha = ('a'...'z').to_a
  message_letters = message.split("")
  coded_message = ""

  message_letters.each do |letter|
    if alpha.include?(letter.downcase) 
      original_index = alpha.index(letter.downcase)
      new_index = original_index - offset
      new_letter = alpha[new_index]


      if letter == letter.upcase
        new_letter = new_letter.upcase
      end
      # puts "letter: #{letter} new letter: #{new_letter}"
      coded_message += new_letter
    else
      coded_message += letter
    end
    # puts "coded message: #{coded_message}"
    
  end
  puts coded_message
end

caesar('I want to an easier and more fulfilling life', 3)

# take a character (downcase) and find its index in the alphabet
# the index subtracted by 26 will give a negative number
# use the negative number to find the index of the encoded letter
# skip anything that isn't included in the alphabet
# maintain the case