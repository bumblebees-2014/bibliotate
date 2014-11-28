class SessionsController < ApplicationController

  def destroy
  	binding.pry
    session.destroy
    flash[:error] = "Toodles."
    redirect_to '/'
  end

end
