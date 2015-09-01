
require_relative '../lib/docking_station'
require_relative '../lib/bike'

describe DockingStation do

  it 'should be empty after we build it' do
    station = DockingStation.new

    expect(station.bike_count).to eq 0
  end

  it 'should be able to dock a bike' do
    station = DockingStation.new
    bike = Bike.new
    station.dock(bike)

    expect(station.bike_count).to eq 1
  end

end