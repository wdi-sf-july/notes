Rails.application.routes.draw do
  root to: "creatures#index"
  resources :creatures do
    resources :comments
  end
end
