class CreateConsoles < ActiveRecord::Migration
  def change
    create_table :consoles do |t|
      t.string :name
      t.string :make

      t.timestamps null: false
    end
  end
end
