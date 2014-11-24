class AddFileToStories < ActiveRecord::Migration
  def change
    add_column :stories, :file, :string
    add_column :stories, :text_file, :string
  end
end
