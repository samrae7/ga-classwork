
require_relative './spec_helper'

describe RomanNumeral do


  let(:rn) {RomanNumeral.new}

  # it "should check that a valid number has been entered" do
  #   expect(rn.)
  # end


  it "should be able to convert 1 to I" do 
    expect(rn.convert(1)).to eq "I"
  end

  it "should be able to convert 5 to V" do
    expect(rn.convert(5)).to eq "V"
  end

   it "should be able to convert 10 to X" do
    expect(rn.convert(10)).to eq "X"
  end

   it "should be able to convert 25 to XXV" do
    expect(rn.convert(25)).to eq "XXV"
  end

     it "should be able to convert 34 to XXXIV" do
    expect(rn.convert(34)).to eq "XXXIV"
  end

end