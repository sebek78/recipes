# frozen_string_literal: true

require 'sinatra'
require 'encrypted_cookie'
require 'pg'
require 'json'
require 'bcrypt'
require 'sysrandom/securerandom'

require './models/db.rb'
require './models/user.rb'
require './routes/user.rb'

configure { set :server, :puma }

configure :development do
  use Rack::Session::EncryptedCookie,
      secret: ENV.fetch('SESSION_SECRET') { SecureRandom.hex(64) },
      path: '/',
      expire_after: 2_592_000 # In seconds

  set :database,
      host: 'localhost',
      database: 'test_db',
      username: 'sebekpraca',
      password: 'test-password'
end

configure :production do
  use Rack::Session::EncryptedCookie,
      secret: ENV.fetch('SESSION_SECRET') { SecureRandom.hex(64) },
      path: '/',
      expire_after: 2_592_000, # In seconds
      same_site: :strict
end

# Main App
class App < Sinatra::Application
  include Db
  include User
  include BCrypt

  before do
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
  end

  get '/' do
    send_file './public/index.html'
  end

  get '/*' do
    redirect '/'
  end

  options '*' do
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    status 200
  end
end
