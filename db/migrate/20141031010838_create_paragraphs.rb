class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.belongs_to :story

      t.timestamps
    end
  end
end