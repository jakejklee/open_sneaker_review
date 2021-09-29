module Api
    module V1
        class ProjectreviewsController < ApplicationController
            protect_from_forgery with: :null_session
            def create
                projectreview = project.projectreviews.new(projectreview_params)

                if projectreview.save
                    render json: ProjectreviewSerializer.new(projectreview).serialized_json
                else
                    render json:{error:projectreview.errors.messages}, status:422
                end
            end


            def destroy
                projectreview = Projectreview.find(params[:id])

                if projectreview.destroy
                    head :no_content
                else
                    render json:{error:projectreview.errors.messages}, status:422
                end
            end

            private

            def project
                @project ||= Project.find(params[:project_id])
            end
            def projectreview_params
                params.require(:projectreview).permit(:title, :description, :score, :project_id)
            end

        end
    end
    
end