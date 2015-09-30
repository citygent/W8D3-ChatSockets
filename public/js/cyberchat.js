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
  console.log(message)
  socket.emit('message', message)
  $('form').trigger('reset');
});

socket.on('message', function(msg){
  console.log(msg)
  putOnPage(msg)
})

function putOnPage(msg){
  var chatmessage = '<li>' + msg + '</li>'
  $('#chatlog').append(chatmessage);

}

});