class Jacket
 
 attr_writer :style, :colour
 attr_accessor :style, :colour

 def initialize (colour,style)
    @colour = colour
    @style = style
    # @in_stock=true
 end

 def buttons
  style == "duffel" || style == "trench coat" ? true : false
 end

end

jacket001 = Jacket.new('black', 'bomber')

puts jacket001.buttons



