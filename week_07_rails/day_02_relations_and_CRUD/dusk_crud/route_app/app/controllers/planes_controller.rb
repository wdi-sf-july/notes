class PlanesController < ApplicationController

  def index
    @planes = Plane.all
  end

  def new
  end

  def create
    #raise params.inspect
    new_plane = params[:plane].permit(:name, :description, :kind)
    Plane.create(new_plane)
    redirect_to "/planes"
  end

  def show
    id = params[:id]
    @plane = Plane.find(id)
  end
end