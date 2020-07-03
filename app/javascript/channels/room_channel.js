import consumer from "./consumer"

consumer.subscriptions.create({ channel: "RoomChannel", room_id: 1}, {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to room channel...")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message_holder').append('<div class="message">' + data.content + '</div>')
    console.log(data)
    $('form')[0].reset()
  }
});

var submit_messages;

$(document).on('turbolinks:load', function(){
  submit_messages()
})

submit_messages = function(){
  $('message_content').on('keydown', function(event){
    if (event.keyCode === 13){
      $('input').click()
      event.target.value = ''
      event.preventDefault
      console.log('submitted message')
    }
  })
}
