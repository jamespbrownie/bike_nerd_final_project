class BuildsController < ApplicationController
    def index
        builds = current_user.builds
        render json: builds #.order(created_at: :desc)
    end

    def show
        build = current_user.builds.find_by(id: params[:id])
        if build 
            render json: build#, include: :parts
        else 
            render json: {error: "build not found"}, status: :not_found
        end
    end

    def create
        build = Build.create(build_params)
        if build.valid? 
            render json: build, status: :created
        else 
            render json: { error: build.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        build = Build.find_by(id: params[:id])
        if build
            build.update(build_params)
            render json: build, status:200
        else 
            render json: { error: "build not found"}, status: :not_found
        end
    end

    def destroy
        build = Build.find_by(id: params[:id])
        if build 
            build.destroy
            head :no_content
        else  
            render json: { error: "build not found"}, status: :not_found
        end
    end

    private

    def build_params
        params.permit(:name, :image, :notes, :current_build, :user_id)
    end
end
