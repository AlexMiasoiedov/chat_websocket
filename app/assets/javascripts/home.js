$(document).ready(function(){

  var dispatcher = new WebSocketRails('localhost:3000/websocket');
  var channel = dispatcher.subscribe('channel_chat')

  channel.bind('incoming_message', function(data) {
      //var user = data.user;
      if(data.user == 'user1') {
        var user = data.user.fontcolor("green");
      } else if (data.user == 'user2') {
        var user = data.user.fontcolor("red");
      } else {
        var user = data.user.fontcolor("yellow");
      }
      var str = user + ': ' + data.msg + '</br>';
      var chat_post = "<div class='chat_post'>" + str + "</div>"
      $('div').append(str);
    });

  $("form#user1").on('submit', function(event) {
    event.preventDefault();
    var message = {msg: $('#msg1').val(), user: 'user1'}
    $.ajax({
      type: 'POST',
      url: 'home/receive_message',
      data: message,
      statusCode: {
        200: function() {console.log('status: 200')}
      }
    })
  });

  $("form#user2").on('submit', function(event) {
    event.preventDefault();
    var message = {msg: $('#msg2').val(), user: 'user2'}
    $.ajax({
      type: 'POST',
      url: 'home/receive_message',
      data: message,
      statusCode: {
        200: function() {
         console.log('status: 200')
       }
      }
    })
  });

  $("form#user3").on('submit', function(event) {
    event.preventDefault();
    var message = {msg: $('#msg3').val(), user: 'user3'}
    $.ajax({
      type: 'POST',
      url: 'home/receive_message',
      data: message,
      statusCode: {
        200: function() {
         console.log('status: 200')
       }
      }
    })
  });

})
