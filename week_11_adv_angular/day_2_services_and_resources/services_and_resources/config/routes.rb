Rails.application.routes.draw do
  root to: "books#index"
  resources :books, except: [:edit, :new]
  resources :book_templates
end