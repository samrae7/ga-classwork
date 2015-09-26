class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :publisher
      t.string :genre
      t.references :console, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
