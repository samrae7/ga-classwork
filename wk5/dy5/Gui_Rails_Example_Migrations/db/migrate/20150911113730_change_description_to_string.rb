class ChangeDescriptionToString < ActiveRecord::Migration
  def change
    change_column :customers, :description, :string
  end
end
