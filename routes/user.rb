# frozen_string_literal: true

# Routes for user
class App < Sinatra::Application
  post '/login' do
    request.body.rewind
    data = JSON.parse request.body.read
    login_user(data).to_json
  end

  post '/logout' do
    session.clear
    { authenticated: false }.to_json
  end

  post '/register' do
    request.body.rewind
    data = JSON.parse request.body.read
    register_user(data).to_json
  end
end
