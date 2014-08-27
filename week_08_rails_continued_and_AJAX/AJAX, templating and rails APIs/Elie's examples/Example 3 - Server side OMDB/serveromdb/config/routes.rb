Rails.application.routes.draw do

	get 'info/results', to: 'info#results'
  post 'info/results', to: 'info#add'
  resources :favorites

  resources :info
  root 'info#index'

end
