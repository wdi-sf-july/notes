class CreateDemos < ActiveRecord::Migration
  def change
    create_table :demos do |t|
      t.string :name

      t.timestamps
    end
  end
end
