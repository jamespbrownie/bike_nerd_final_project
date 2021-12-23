class PartsController < ApplicationController

    def index
        parts = current_user.parts
        if @current_user
            render json: parts.order(created_at: :desc)
        else  
            render json: [], status: :unauthorized
        end 
    end

    def show
        part = current_user.parts.find_by(id: params[:id])
        if part 
            render json: part
        else 
            render json: {error: "part not found"}, status: :not_found
        end
    end

    def create
        part = Part.create(part_params)
        part.user = @current_user
        part.save
        if part.valid? 
            render json: part, status: :created
        else 
            render json: { error: part.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        part = current_user.parts.find_by(id: params[:id])
        if part
            part.update(part_params)
            render json: part, status:200
        else 
            render json: { error: "part not found"}, status: :not_found
        end
    end

    def destroy
        part = Part.find_by(id: params[:id])
        if part 
            part.destroy
            head :no_content
        else  
            render json: { error: "part not found"}, status: :not_found
        end
    end

    private

    def part_params
        params.permit(:name, :image, :specs, :notes, :part_type, :frame)

    end

end
