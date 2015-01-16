class User < ActiveRecord::Base
# For if they are a student
  has_many :enrollments
  has_many :enrolled_courses, through: :enrollments, source: :course

  has_many :comments
  has_many :notifications
  has_many :hashtags

# For if they are a teacher
  def taught_courses
    if is_teacher?
      Course.where(teacher: self)
    end
  end

  #returns boolean true or false if user is a teacher
  def is_teacher?
    self.role.downcase == "teacher"
  end

  def has_new_notification?
    if self.notifications.length > 0 
      self.notifications.first.status
    else
      false
    end
  end


end
