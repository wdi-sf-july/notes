class FavoritesController < ApplicationController
  def index
  	@favorites = Favorite.all
  end

  def create
  	Favorite.create(name: params[:title])
  	redirect_to '/favorites'
  end
end
