
require_relative '../lib/docking_station'
require_relative '../lib/bike'

describe DockingStation do

  def fill_station station
    20.times { station.dock(Bike.new)}
  end


  let(:station) {DockingStation.new ({capacity: 20}) }
  # OPTIONS HASH
  let(:bike) {Bike.new}


  it 'should be empty after we build it' do

    expect(station.bike_count).to eq 0
  end

  it 'should be able to dock a bike' do
    
    station.dock(bike)

    expect(station.bike_count).to eq 1

  end

  it 'should be able to release a bike' do
    
    station.dock(bike)
    station.release(bike)
    expect(station.bike_count).to eq 0

  end

  it 'should know when it has reached capacity' do
    fill_station station
    expect(station.full?).to be true
  end

  it 'should not accept a bike if full' do
    fill_station station
    expect{station.dock(bike)}.to raise_error 'Station is full'
  end

end