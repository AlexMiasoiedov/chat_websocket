class HomeController < ApplicationController

  def index
  end

  def receive_message
    WebsocketRails[:channel_chat].trigger(:incoming_message, { msg: params[:msg], user: params[:user] })
    respond_to do |format|
      format.html { render nothing: true }
    end
  end

end
