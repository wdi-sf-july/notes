class Creature < ActiveRecord::Base
  has_many :comments
end
