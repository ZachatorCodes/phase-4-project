class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :trail_name
      t.integer :length
      t.integer :elevation
      t.string :location
      t.integer :difficulty

      t.timestamps
    end
  end
end
