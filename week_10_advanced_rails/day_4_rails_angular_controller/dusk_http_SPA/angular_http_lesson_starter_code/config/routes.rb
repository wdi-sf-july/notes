AngularBook::Application.routes.draw do
	resources :books, except: [:new, :edit]

  match "*path", to: "books#index", via: "get"

  root 'books#index'
end
