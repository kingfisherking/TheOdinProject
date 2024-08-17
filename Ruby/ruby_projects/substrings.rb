dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(phrase, substring_list)
  words = phrase.split(" ")
  substring_hash = Hash.new(0)
  words.each do |word|
    substring_list.each do |substring|
      if word.include? substring
        substring_hash[substring] += 1
      end
    end
  end
  substring_hash.each {|key, value| puts "#{key}: #{value}"}
  substring_hash
end
substrings("Howdy partner, sit down!, How's it going?", dictionary)