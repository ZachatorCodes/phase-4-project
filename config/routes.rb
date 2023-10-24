Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # Trail routes
  resources :trails, only: [:index, :create]

  # Review routes
  resources :reviews, only: [:create]

  # User and session routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # Handles non-API route requests
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
  
end