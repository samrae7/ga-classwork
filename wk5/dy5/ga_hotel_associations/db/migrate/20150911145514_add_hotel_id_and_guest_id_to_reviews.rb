class AddHotelIdAndGuestIdToReviews < ActiveRecord::Migration
  def change
    add_reference :reviews, :hotel, index: true, foreign_key: true
    add_reference :reviews, :guest, index: true, foreign_key: true
  end
end
