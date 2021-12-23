Rails.application.routes.draw do
  
  resources :build_parts, only: [:index, :show, :create, :destroy]
  resources :builds
  resources :parts
  resources :users, only: [:show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end
