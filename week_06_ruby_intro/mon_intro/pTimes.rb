# this is a comment

# name a file with a <file_name>
# and a `.rb` extension

def pTimes(statement, num)
  num.times do
    puts statement
  end
end

statement = gets.chomp
pTimes(statement, 10)