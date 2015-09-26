class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.string :nationality
      t.integer :age

      t.timestamps null: false
    end
  end
end
