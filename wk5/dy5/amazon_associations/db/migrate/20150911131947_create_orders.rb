class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.decimal :price
      t.integer :amount

      t.timestamps null: false
    end
  end
end
