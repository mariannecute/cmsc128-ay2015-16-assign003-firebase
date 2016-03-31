var myDataRef = new Firebase('https://guesttracker.firebaseio.com/');
  $('#pressMe').click(function () {
      var name = $('#nameInput').val();
      var contactNum = $('#numInput').val();
      var org = $('#orgInput').val();
      myDataRef.push({name: name, contactNum: contactNum, org: org});
      $('#nameInput').val('');
      $('#numInput').val('');
      $('#orgInput').val('');

 });

myDataRef.on('child_added', function(snapshot) {
	var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});

