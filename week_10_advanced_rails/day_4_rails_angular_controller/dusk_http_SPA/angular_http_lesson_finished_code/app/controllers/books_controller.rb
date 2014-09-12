class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  # create a before_action that just returns the template
  #   without the layout
  before_action :render_main_layout_if_format_html

  respond_to :json, :html

  def index
    respond_with (@books = Book.all)
  end

  def create
    respond_with Book.create(book_params)
  end

  def show
    respond_with @book
  end

  def update
    respond_with @book.update(book_params)
  end

  def destroy
    respond_with @book.destroy
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :description)
  end

  def render_main_layout_if_format_html
    # check the request format
    if request.format.symbol == :html
      render "layouts/application"
    end
  end

end