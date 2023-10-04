Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # Handles non-API route requests
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  # Log-in and log-out routes
  get '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  # User routes
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
end