$( document ).ready(function() {
    console.log( "loaded!" );

// var socket = io('http://f7c77f1f.ngrok.io')
var socket = io()

socket.on('connect', function(){
  console.log('knex')
})


$('form').submit(function(e){
  e.preventDefault();
  var message = $('#message').val()
  var user = $('#user').val();
  console.log(message)
  socket.emit('message', { msg: message, usr: user })
  // $('form').trigger('reset');
  $('#message').val('');
  $('.username').hide('slow');
});

socket.on('message', function(UserMessageObject){
  console.log(UserMessageObject.msg)
  console.log(UserMessageObject.usr)
  putOnPage(UserMessageObject)
})

function putOnPage(UserMessageObject){
  var chatmessage = '<li><strong>' + UserMessageObject.usr + ' says: </strong>'
  chatmessage += '' + UserMessageObject.msg + '</li>'
  $('#chatlog').append(chatmessage);
  $("#chat-container").animate({
    'scrollTop': $("#chat-container")[0].scrollHeight}, 'slow')
}

});