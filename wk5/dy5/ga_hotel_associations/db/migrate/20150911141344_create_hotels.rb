class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :city
      t.string :country
      t.integer :rating

      t.timestamps null: false
    end
  end
end
