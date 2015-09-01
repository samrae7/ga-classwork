require_relative 'airport'
require_relative 'flight'
require_relative 'passenger'

airport = Airport.new('London Heathrow')

def list_flights airport
  airport.flights.each_with_index do |flight, index|
    puts "#{index} : #{flight}"
  end
  # critical to know that airport.flights is set by the accessor:flights in flights
end

def list_passengers(flight)
  flight.passengers.each_with_index{ |passenger, index| puts "#{index} : #{passenger.name}"}
  # can call the above becaise of the accessor in flights
end 

def menu
  puts `clear`
  puts '*' * 52
  print "Welcome to London Heathrow".center 50
  puts "\n"
  puts "*" *52
  puts '1: Add a flight'
  puts '2: List flights'
  puts '3: Add a passenger to a flight'
  puts '4: List passengers on a flight'
  puts 'q: Quit'
  print '-->'
  gets.chomp
end

response = menu

while response.downcase != 'q'
  case response
  when '1' # Add flight
    puts 'How many seats on this flight?'
    number_of_seats = gets.to_i
    puts 'What is the flight\'s destination?'
    destination = gets.chomp

    # airport.add_flight(number_of_seats, destination)
    puts airport.add_flight(number_of_seats, destination)
    gets
  when '2' # List flights
    puts 'Here are all the flights: '
    list_flights(airport)
    gets
  when '3' # Add a passenger to a flight
    # create passenger
    puts 'What is the passenger\'s name?'
    name = gets.chomp
    passenger = Passenger.new(name)   

    # ask user what flight they ent to be added to
    # and lists flights
    puts "What flight do you want #{name} to be added to?"
    list_flights(airport)

    flight_number = gets.to_i
    flight = airport.flights[flight_number]

    flight.add_passenger(passenger)
    puts "#{passenger.name} has been added to #{flight}"
    puts "Press any key"
    gets

  when '4' # List passengers on flight

    #List the flights
    puts "What flight do you want to list the passengers for?"
    list_flights(airport)

    #Choose a flight
    flight_number = gets.to_i
    flight = airport.flights[flight_number]

    #loop through the passengers array in a nice way
    puts 'The passengers for this flight are:'
    list_passengers(flight)
    gets
  end

  response = menu

end




