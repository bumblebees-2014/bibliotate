module SessionsHelper

  def current_user
    @user ||= User.find_by(id: session[:user_id])
    @user ||= User.find_by(id: 1)
  end

  def user_logged_in?
    current_user
  end

end
