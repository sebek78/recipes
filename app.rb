# frozen_string_literal: true

require 'sinatra'

configure { set :server, :puma }

# Main App
class App < Sinatra::Base
  get '/' do
    'Hello world!'
  end
end
