class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create
        user = User.create(user_params)
        if user.valid?
            session[:id] = user.id
            render json: user, status: :ok
        else 
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        if @current_user
            render json: @current_user
        else  
            render json: "please log in", status: :unprocessable_entity
        end 
    end

    private
    def user_params
        params.permit(:name, :username, :profile_icon, :bio, :password)
    end

end
