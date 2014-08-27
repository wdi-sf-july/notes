class InfoController < ApplicationController
  def index
  end

  def results
    @query = params[:query]

    request = Typhoeus.get(
      "http://www.omdbapi.com",
      :params => {:s => @query}
      )

		@results = JSON.parse(request.body)

    puts @results

  end

    def show
      @favorite = Favorite.new()
    @movie = params[:id]
    puts "THIS IS PARAMS!"
    puts @movie

    request = Typhoeus.get(
      "http://www.omdbapi.com",
      :params => {:i => @movie}
      )
    @movie_result = JSON.parse(request.body)
    puts @movie_result
    end

    def add
      redirect_to index
    end
end
