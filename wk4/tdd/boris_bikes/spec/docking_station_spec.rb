
require_relative '../lib/docking_station'
require_relative '../lib/bike'

describe DockingStation do
  let(:station) {DockingStation.new}
  let(:bike) {Bike.new}


  it 'should be empty after we build it' do

    expect(station.bike_count).to eq 0
  end

  it 'should be able to dock a bike' do
    bike = Bike.new
    station.dock(bike)

    expect(station.bike_count).to eq 1

  end

  it 'should be able to release a bike' do
    bike = Bike.new
    station.dock(bike)
    station.release(bike)
    expect(station.bike_count).to eq 0

  end

  it 'should know when it has reached capacity' do
  end

end