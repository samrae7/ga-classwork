class RomanNumeral

  NUMERALS = {
    # keep adding numbers after that
    40 => 'XL',
    10 => 'X',
    5 => 'V',
    4 => 'IV',
    1 => 'I'
  }

  def convert num
    numeral =''
      NUMERALS.each do |arabic, roman|
        (num / arabic).times do
          numeral << roman
          num = num - arabic
        end
      end

    numeral
  end


end