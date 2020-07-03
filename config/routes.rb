Rails.application.routes.draw do
  root 'pages#index'
  get 'pages/index'
  resources :messages, only: [:new, :create]
  devise_for :users

  # mount ActionCable.server => '/cable'
end
