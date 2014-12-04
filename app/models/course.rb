class Course < ActiveRecord::Base
	has_many :enrollments
	has_many :users, through: :enrollments
	has_many :stories

	belongs_to :teacher, class_name: "User", foreign_key: :user_id

	validates :name, uniqueness: true

	def recent_comments
		stories_array = Story.where(course_id: self.id)
		comments_array = []
		stories_array.each do |story|
			comments_array << story.comments 
		end
		comments_array.flatten!
		comments_array.sort_by &:created_at
	end

end
