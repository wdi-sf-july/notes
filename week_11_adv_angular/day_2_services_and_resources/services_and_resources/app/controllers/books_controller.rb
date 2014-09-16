class BooksController < ApplicationController
  before_action :render_layout_if_html

  def index
    @books = Book.all
  end

  private
    def render_layout_if_html
      if request.format.symbol == :html
        render "layouts/application"
      end
    end
end
