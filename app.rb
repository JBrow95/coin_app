require 'sinatra'
require_relative 'coin.rb'

enable :sessions

get '/' do
  erb :dashboard
end

post '/change' do
	amount = params[:amount].to_i
	# p "this is amount #{amount}"
	# p "this is amount #{amount.class}"
	session[:result] = changer(amount)
	redirect '/second_page'
end

get '/second_page' do

	erb :second_page, locals:{result: session[:result]}
end