Rails.application.routes.draw do
  root to: "creatures#index"

  # just to keep things RESTful
  get "/creatures", to: "creatures#index", as: "creatures"
  get "/creatures/new", to: "creatures#new", as: "new_creature"
  get "/creatures/:id", to: "creatures#show", as: "creature"
  get "/creatures/:id/edit", to: "creatures#edit", as: "edit_creature"

  # a method for creation
  post "/creatures", to: "creatures#create"
  patch "/creatures/:id", to: "creatures#update"
  delete "/creatures/:id", to: "creatures#destroy"
end
