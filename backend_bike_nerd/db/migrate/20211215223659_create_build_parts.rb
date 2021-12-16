class CreateBuildParts < ActiveRecord::Migration[6.1]
  def change
    create_table :build_parts do |t|
      t.integer :build_id
      t.integer :part_id

      t.timestamps
    end
  end
end
