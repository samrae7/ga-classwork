class Person

  # #replaces getter
  # attr_reader :age, :name

  # #replaces setter
  # attr_writer :age, :name

  # replaces attr_writer and attr_setter
  attr_accessor :age, :name

  #class variable
  @@count = 0

  #constant
  DEFAULT_NUMBER_OF_LEGS = 2

  def initialize (name,age)
    @@count += 1
    @name = name
    @age = age
  end

  # class method
  def self.count
    @@count
  end

  def talk words
    puts "My name is #{@name} and I can talk! look at me ma! #{words}"
  end
#not possible because can't change constant
d

  #setter for name but took this out because name is sent on instantiation
  # def set_name name
  #   puts 'Setting name...'
  #   @name = name

  #less-good setter
  # def set_age age
  #   @age = age
  # end

  #replaced by attr_writer
  #setter
  # def age=(age)
  #   @age=age
  # end

  #getter
  # def age
  #   @age
  # end

  # replaces by attr:reader
  # def name
  #   # puts 'Returning the user\'s name'
  #   @name
  # end

end


student1 = Person.new('Robert', '90')
# ta_one = Person.new

# robert.set_name('Robert')

puts student1.class
student1.talk('popcorn and COKE ZERO')

student1.age = 3


# ta_one.set_name 'Guillaume'

# puts ta_one.get_name

# robert.talk ( 'blah blah')

puts "The student's name is #{student1.name}. They are #{student1.age} years old."

puts Person.count

Person.new('Jack', 9)

puts Person.count

puts Person::DEFAULT_NUMBER_OF_LEGS

#not possible because you can't change constants
# person.change_default_number_of_legs(2)

