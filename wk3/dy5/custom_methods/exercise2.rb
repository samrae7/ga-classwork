a = ["Anil", "Erik", "Jonathan"]
#return the string 'Erik'

puts a[1]
a<<'Sam'
puts a.inspect

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

puts h[1]
puts h[:two]
puts h['two']
h[3]="Three"
puts h
h[:four] = 4
puts h

is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# What is the return value of is["Erik" == "Jonathan"]?
# What is the return value of is[9 > 10]?
# What is the return value of is[0]?
# What is the return value of is["Erik"]?

puts is[2 + 2 == 4]
puts is["Erik" == "Jonathan"]
puts is[9 > 10]
puts is[!!0]
puts is[!!"Erik"]

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

puts users["Jonathan"][:twitter]

users["Jonathan"][:favorite_numbers]<<7
puts users["Jonathan"][:favorite_numbers].inspect
users["Sam"]={}
puts users.keys.inspect
puts users["Erik"][:favorite_numbers].inspect
puts users["Erik"][:favorite_numbers].min

puts users["Anil"][:favorite_numbers].select{|n| n.even?}.inspect
puts users["Jonathan"][:favorite_numbers]&users["Anil"][:favorite_numbers]&users["Erik"][:favorite_numbers]
puts users["Jonathan"][:favorite_numbers] + users["Anil"][:favorite_numbers] + users["Erik"][:favorite_numbers]

answer = 'Lucy in the sky with diamonds'

puts answer.to_s.length.to_s.reverse

