require 'yaml'
# require 'rails_helper'
# include StoryCreatorHelper
# require_relative '../config/environment'
# require File.expand_path('../../app/helpers/story_creator_helper.rb',__FILE__)
# include StoryCreator

path = 'db/seed_data.yaml'
seed_data = YAML.load File.read path

users = seed_data[:users]
enrollments = seed_data[:enrollments]
stories = seed_data[:stories]
comments = seed_data[:comments]
courses = seed_data[:courses]
notifications = seed_data[:notifications]

users.each do |attrs|
  User.new(attrs).save(:validate => false)
end

enrollments.each do |attrs|
  Enrollment.new(attrs).save(:validate => false)
end

comments.each do |attrs|
  Comment.new(attrs).save(:validate => false)
end

courses.each do |attrs|
  Course.new(attrs).save(:validate => false)
end
notifications.each do |attrs|
  Notification.new(attrs).save(:validate => false)
end

stories.each do |storydata|

	@story = Story.from_body(storydata[:body])
	storydata.delete(:body)
    @story.assign_attributes(storydata)
    @story.save
end
