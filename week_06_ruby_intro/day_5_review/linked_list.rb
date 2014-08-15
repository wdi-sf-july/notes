class Node
    attr_accessor :value, :next
    
    def initialize
      @value = nil
      @next = nil
    end
end



class List
  attr_accessor :head, :tail
  
  def initialize()
    @current_node = Node.new
    @head = nil
    @tail = nil
  end

  def length
  end
  
  def shift(val)
  end

  def unshift(val)
  end
  
  

  def [](index)
  end

  def []=(index, value)
  end

  def slice(start, finish)
  end

  def each
  end

end
