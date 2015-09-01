# def silly_check(number)
#   if number<5
#     puts "The number is less than 5"
#   else
#     puts "The number is greater than or equal to 5"
#   end
# end

# silly_check(17)
# silly_check(4)

# def drinking_age(number)
#   if number<21
#     puts "No drinks for you. You're too young."
#   else
#     puts "You are old enough to get a drink. Here you go."
#   end
# end

# silly_check(17)
# silly_check(4)

# drinking_age(8)
# drinking_age(57)

def borough_message(borough)

  case borough
  when "Islington"
    puts "I'll meet you at Angel"
  when "Hackney"
    puts "I'll meet you in Stoke Newington"
  when "Tower Hamlets"
    puts "I'll meet you in whitechapel"
  else
    puts "You can come to Kentish Town"
  end

end

borough_message('Hackney')
borough_message('Barnet')