class HashtagsController < ApplicationController
	def index
		# This should be revised to avoid duplicate hashtags
		@hashtags = []
		uniq_hashes = Hashtag.all.select(:tag).distinct
		uniq_hashes.each do |hash|
			@hashtags << Hashtag.find_by(tag:hash.tag)
		end
		@hashtags

	end

	def show
		hashtag = Hashtag.find(params[:id])
		@hashtags = Hashtag.where(tag: hashtag.tag).first(5)
	end
end
