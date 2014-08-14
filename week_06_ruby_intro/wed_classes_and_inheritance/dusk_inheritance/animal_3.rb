class Animal
  attr_accessor :kind
  def initialize(kind)
    @kind = kind
    @state = "awake"
  end
  
  def eat(food)
    if @state == "awake"
      puts "NOM-nom!!"
      puts "(a #{@kind} has eaten #{food})"
    else
      puts "SLEEPING"
    end
    self
  end
  
  def sleep
    @state = "sleeping"
  end
  
  def wake
    @state = "awake"
  end
end
