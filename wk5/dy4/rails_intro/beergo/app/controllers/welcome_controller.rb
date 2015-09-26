class WelcomeController < ApplicationController

 def index
  render text: 'hi this is a page'
 end

 def contact
  render text: 'just call me'
 end


 def faq
  render text: 'we have all the answersr'
 end

end