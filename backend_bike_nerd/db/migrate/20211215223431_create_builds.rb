class CreateBuilds < ActiveRecord::Migration[6.1]
  def change
    create_table :builds do |t|
      t.string :name
      t.string :image
      t.string :notes
      t.boolean :current_build
      t.integer :user_id

      t.timestamps
    end
  end
end
