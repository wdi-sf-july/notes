# we want to count the words
# in a sentence

def word_count(statement)
  occurences = {}
  wordsArr = statement.split(" ")
  
  wordsArr.each do |word_key|
    occurences[word_key] ||= 0
    occurences[word_key] += 1
  end
  #returns occurences
  occurences
end

statement = gets.chomp
p word_count(statement)
