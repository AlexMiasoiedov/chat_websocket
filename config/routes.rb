Rails.application.routes.draw do
  devise_for :users
  resources :chat
  resources :home

  root "home#index"

  post "home/receive_message" => "home#receive_message"
end
