class Robot
  
  attr_reader :instruction_count
  # SHORTHAND GETTER METHOD
  def initialize
    @instruction_count = 0
    # @name = 'xxxx'

  end

  def set_name
    randomNumbers = (0..9).to_a.sample(3)
    randomLetters = ('A'..'Z').to_a.sample(2)
    (randomLetters + randomNumbers).join()

  end

  def name
    @instruction_count += 1
    # !!!!!!!!!!!!!!!!!!!!!!! IMPORTANT
    @name = @name || set_name
    # ************************
    #  @name ||= set_name SHORTCUT
  end
  

  # def name
   
  #   if @name === 'xxxx'
  #     @name = Random.new.bytes(4)
  #   end
  #   @instruction_count += 1
  #   return @name
  # end

  def reset
    # @name = Random.new.bytes(4)
    @instruction_count += 1
    @name = nil
    
  end

  # def instruction_count
  #   puts @instruction_count
  # end
  # DON"T NEED THIS BECAUSE OF   attr_reader :instruction_count

end

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.instruction_count


