Rails.application.routes.draw do
  
  resources :build_parts
  resources :builds, only: [:index, :show, :create]
  resources :parts, only: [:index, :show, :create]
  resources :users, only: [:show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
