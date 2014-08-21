class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    render :index
  end

  def new
    @creature = Creature.new
    render :new
  end

  def create
    creature_params = params.require(:creature).permit(:name, :description)
    Creature.create(creature_params)
    redirect_to creatures_path
  end

  def show
    id = params[:id]
    @creature = Creature.find(id)
    render :show
  end

  def edit
    id = params[:id]
    @creature = Creature.find(id)
    render :edit
  end

  def update
    creature_id = params[:id]
    creature = Creature.find(creature_id)
    
    updated_params = params.require(:creature).permit(:name, :description)
    creature.update_attributes(updated_params)
    redirect_to creature
  end


  def destroy
    id = params[:id]
    creature = Creature.find(id)
    creature.destroy
    redirect_to "/creatures"
  end 

















end
