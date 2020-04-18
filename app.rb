# frozen_string_literal: true

require 'sinatra'
require 'pg'
require 'json'
require 'bcrypt'
require 'sysrandom/securerandom'

require './models/db.rb'
require './models/user.rb'
require './routes/user.rb'

configure { set :server, :puma }

configure :development do
  enable :session
  set :session_secret, ENV.fetch('SESSION_SECRET') { SecureRandom.hex(64) }
  set :sessions, expire_after: 2_592_000 # seconds, 30 days
  set :database,
      host: 'localhost',
      database: 'test_db',
      username: 'sebekpraca',
      password: 'test-password'
end

# Main App
class App < Sinatra::Application
  include Db
  include User
  include BCrypt

  before do
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
  end

  get '/' do
    send_file './public/index.html'
  end

  get '/:path' do
    send_file './public/index.html'
  end

  options '*' do
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    status 200
  end
end
