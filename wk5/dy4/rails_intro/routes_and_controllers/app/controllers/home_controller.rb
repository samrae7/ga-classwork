class HomeController < ApplicationController

  def about_us
    render  text: 'Hi from WDI 15. This is a page all about us.'
  end

  def contact
    # render text: 'Just HOLLLA!'
    # by default will look inside the contact view
  end

end