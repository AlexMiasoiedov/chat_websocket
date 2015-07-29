class ChatController < WebsocketRails::BaseController
  def initialize_session
    controller_store[:message_count] = 0
  end

  def hello_event
    if message[:call]
      trigger_success :resp => 'hello ' + message[:call]
    else
      trigger_failure :message => 'goodbay websocet'
    end
  end

  def goodbay_event
    resp = { :resp => 'goodbay ' + message[:call] }
    send_message :goodbay_event_success, resp
  end

  def incoming_message
    broadcast_message :incoming_message, { :msg => message[:msg], :user => message[:user] }
  end
end