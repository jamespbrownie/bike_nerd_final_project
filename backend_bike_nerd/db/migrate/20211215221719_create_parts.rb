class CreateParts < ActiveRecord::Migration[6.1]
  def change
    create_table :parts do |t|
      t.string :name
      t.string :image
      t.string :specs
      t.string :notes
      t.string :part_type
      t.boolean :frame
      t.integer :user_id

      t.timestamps
    end
  end
end
