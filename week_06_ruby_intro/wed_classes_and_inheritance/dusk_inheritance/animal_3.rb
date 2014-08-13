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

class Person < Animal
    @@banned_foods = /person|people|human|humans|woman|woman|children|child|baby|babies/i

    def initialize(age, gender, name)
        # call the super initialize
        super("person")
        @age = age
        @gender = gender
        @name = name
    end

    # stop cannibalism!
    def eat(food)
      unless @@banned_foods.match(food)
        super(food)
      else
        puts "(cannibalism is not allowed!!)"
      end
      self
    end
end