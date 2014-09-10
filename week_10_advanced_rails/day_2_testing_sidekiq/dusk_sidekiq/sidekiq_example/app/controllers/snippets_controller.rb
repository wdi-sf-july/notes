class SnippetsController < ApplicationController
  def show
    @snippet = Snippet.find(params[:id])
  end

  def new
    @snippet = Snippet.new
  end

  def create
    @snippet = Snippet.new(params[:snippet].permit(:language, :plain_code))
    if @snippet.save
      PygmentsWorker.perform_async(@snippet.id)
      redirect_to @snippet
    else
      render :new
    end
  end

end
