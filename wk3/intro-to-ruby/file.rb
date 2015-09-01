# puts 'hello' if true

# print 'Enter a number:'
# n=gets.to_i

# if n>0
#   puts 'Your number is positive'
# elsif n < 0
#   puts 'Your number is negative'
# else
#   puts 'Your number is zero'
# end

# print 'Enter a number: '
# n=gets.to_i
# unless n>10
#   puts 'toosmall!'
# else
#   puts 'too LARGE!'
# end


# puts  'Exit the program? (yes or no):'
# answer = gets.chomp.downcase

##CASE

# case answer
# when 'yes'
#   puts 'Bye'
#   exit
# when 'no'
#   puts 'ok. crack on!'
# else
#   puts 'eh? I do not compute'
# end

# puts 'Continuing with program...'


##FOR LOOP

# n = 1

# while n < 11
#   puts n
#   n=n+1
# end
# puts 'done'


##EXERCISE
question = 'What is Pi?'
puts question
answer = gets.to_f.round(2)

while answer!=3.14
  puts 'Incorrect. '+ question
  answer = gets.to_f.round(2)
end

puts 'well done'



