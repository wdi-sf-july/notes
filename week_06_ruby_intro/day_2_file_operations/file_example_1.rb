#file_example_1.rb

def make_todo(fname, title)
  if !Dir.exist?("todos")
    Dir.mkdir("todos")
  end
  newTodo = File.new("todos/#{fname}", "w")
  newTodo.write "### #{title} ###\n"
  newTodo.close
end

def time_created
 Time.new.strftime("%Y%m%d%H%M%S")
end

def start
  title = ARGV[0]
  status = "incomplete"
  time = time_created
  fname = "#{time}_#{title[0..9]}_#{status}"
  make_todo(fname, title)
end

start()