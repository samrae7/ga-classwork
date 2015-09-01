require_relative '../lib/bike'

# describing functionality of the specific class Bike
describe Bike do

  let (:bike) { Bike.new }

  it 'should not be broken after we create it' do
    # bike = Bike.new # instantiate an instance of Bike class
    expect(bike.broken?).to be false
  end

  it 'should be able to break' do
    # bike= Bike.new
    bike.break
    expect(bike.broken?).to be true
  end

  it 'should be repairable' do
    # bike= Bike.new
    bike.break
    bike.fix
    expect(bike.broken?).to be false
  end


end