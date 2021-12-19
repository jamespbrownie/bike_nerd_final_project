class BuildPartsController < ApplicationController
    
    def index
        build_parts = BuildPart.all
        render json: build_parts.order(created_at: :desc)
    end

    # def show
    #     bp = current_user.build_parts.find_by(id: params[:id])
    #     if build 
    #         render json: bp
    #     else 
    #         render json: {error: "build-part not found"}, status: :not_found
    #     end
    # end

    def create
        buildPart = BuildPart.create(build_part_params)
        if buildPart.valid? 
            render json: buildPart, status: :created
        else 
            render json: { error: buildPart.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        buildPart = BuildPart.find_by(id: params[:id])
        if buildPart 
            buildPart.destroy
            head :no_content
        else  
            render json: { error: "build not found"}, status: :not_found
        end
    end

    private

    def build_part_params
        params.permit(:build_id, :part_id)
    end

end
