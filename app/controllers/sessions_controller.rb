class SessionsController < ApplicationController

  def destroy
    session.destroy
    flash[:error] = "Toodles."
    redirect_to '/'
  end

end
