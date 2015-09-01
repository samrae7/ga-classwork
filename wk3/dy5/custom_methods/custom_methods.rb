def hello(name='no name')
  puts "hello #{name}"
end

hello('Sam')

#SPLAT ARGUMENTS
def say_hello(*name)
  puts name.inspect
end

say_hello('John', 'Luke', 'Sam', 'Tom', 'Lara')

##convert array to a string using .join


def mixed_args(a,b,*c)
  puts a.inspect
  puts b.inspect
  puts c.inspect
end

mixed_args(1, 5, 345, 678, 94)
#would get an error if passed less than three args

