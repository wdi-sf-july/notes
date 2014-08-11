def mock_me
  response = nil
  until response == "quit"
    puts "what's up???"
    response = gets.chomp
    puts response
  end
end

mock_me()