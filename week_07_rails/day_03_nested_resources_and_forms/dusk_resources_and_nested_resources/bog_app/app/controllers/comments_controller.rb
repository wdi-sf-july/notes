class CommentsController < ApplicationController

  def index
    creature_id = params[:creature_id]
    @creature = Creature.find(creature_id)
    @comments = @creature.comments
  end

  def new
    creature_id = params[:creature_id]
    @creature = Creature.find(creature_id)
    @comment = @creature.comments.new
  end

  def create
    creature_id = params[:creature_id]
    @creature = Creature.find(creature_id)

    new_comment = params.require(:comment).permit(:body, :title)
    @comment = @creature.comments.create(new_comment)

    redirect_to creature_comment_path(@creature.id, @comment)
  end

  def show
    creature_id = params[:creature_id]
    @creature = Creature.find(creature_id)
    @comment = @creature.comments.find(params[:id])
  end
end
