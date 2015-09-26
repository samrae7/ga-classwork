class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :location
      t.integer :age

      t.timestamps null: false
    end
  end
end
