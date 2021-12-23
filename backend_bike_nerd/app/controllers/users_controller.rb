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
        logger.debug "current_user 123"
        if @current_user
            render json: @current_user, status: :ok
        else  
            render json: {errors: ["please log in"]}, status: :unauthorized
        end 
    end

    private
    def user_params
        params.permit(:name, :username, :profile_icon, :bio, :password)
    end

end
