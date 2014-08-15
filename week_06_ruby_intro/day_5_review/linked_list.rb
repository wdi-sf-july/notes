
class List
  attr_accessor :head, :tail
  
  def initialize()
    @current_node = Node.new
    @head = nil
    @tail = nil
  end

  def length
  end
  
  def shift
    if @tail == nil
      old_head = @head
      @head = nil
    else
      old_head = @head
      @head = @tail.head
      @tail = @tail.tail
    end
    old_head
  end

  def unshift(val)
    if @head == nil
      @head = val
    else
      # creates the list
      new_list = List.new
      # uses the setter for head
      #  to update the new_list
      new_list.head = @head
      new_list.tail = @tail
      #update head
      @head = val
      @tail = new_list
    end
    self
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
