class Notification < ActiveRecord::Base
  belongs_to :user
  belongs_to :noteable, polymorphic: true
  validates :noteable_id, presence: true
  validates :user_id, presence: true
  validates :status, presence: true
  validate :notification_belongs_to_enrollments_and_comments

  def notification_belongs_to_enrollments_and_comments
    if noteable_type != "comment" && noteable_type != "enrollment"
      errors.add(:noteable_type, "is not comment or enrollment")
    end
  end

  def applies_to_user
    downcased_noteable_type = self.noteable_type.downcase
    if downcased_noteable_type == "comment"
      User.find(Comment.find(self.noteable_id).user_id).name
    else
      User.find(Enrollment.find(self.noteable_id).user_id).name
    end
  end

  def is_about
    downcased_noteable_type = self.noteable_type.downcase
    if downcased_noteable_type == "comment" 
      if Comment.find(self.noteable_id).sentence == nil
        self.destroy
        "Notification Removed"
      else  
        Comment.find(self.noteable_id).sentence.paragraph.story.title
      end
    else
      Course.find(Enrollment.find(self.noteable_id).course_id).name
    end
  end

  def note_sentence
    downcased_noteable_type = self.noteable_type.downcase
    if self.is_about == "Notification Removed"
      "Notification Removed"
    elsif downcased_noteable_type == "comment"
      "#{self.applies_to_user} commented on #{self.is_about}"
    else
      "#{self.applies_to_user} joined #{self.is_about}"
    end
  end

  def note_path
      downcased_noteable_type = self.noteable_type.downcase
    if downcased_noteable_type == "comment"
       story_id = Comment.find(self.noteable_id).story.id
      "/stories/#{story_id}"
    else
        user_id = User.find(Enrollment.find(self.noteable_id).user_id).id
       "/users/#{user_id}"      
    end

  end


end
