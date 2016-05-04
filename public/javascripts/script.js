$(document).ready(function(){
  //set up event handlers
  eventHandlers();
  getContacts();
});

function getContacts(){
  $.ajax({
    type: "GET",
    url: "api/getContacts",
    dataType: "json",
    success: displayContacts
  }).fail(function(){
    console.log('Error loading from API');
  });
}

function displayContacts(data){
  //build table for all contacts
  var table = $('#contactList');
  var tbody = $('<tbody>');

  data.contacts.forEach(function(contact){
    var tr = $('<tr>');
    var tdName = $('<td>');
    var href =$('<a>');
    href.attr('href', ('api/getContact/'+ contact.id));
    href.text(contact.firstname + " " + contact.lastname);
    href.click(showContactInfo);
    var tdDelete = $('<td>');
    var p = $('<p>Delete</p>');
    tdDelete.append(p);

    tdName.append(href);
    tr.append(tdName);
    tr.append(tdDelete);
    tbody.append(tr);
  });

  table.append(tbody);
}

function showContactInfo(event, id){
  event.preventDefault();
  var apilink = $(this).attr('href');
  $.getJSON(apilink, function(data){
    var contactinfo = $('#contactInfo');
    contactinfo.empty();
    var name = $('<p>', {html: '<b>Name: </b>' + data.firstname + " " + data.lastname});
    var age = $('<p>', {html: '<b>Age: </b>' +  data.age});
    var sex = $('<p>', {html: '<b>Gender: </b>' + data.sex});
    var num = $('<p>', {html: '<b>Phone Number: </b>' + data.phoneNumber});
    contactinfo.append(name, age, sex, num);
    console.log(data);
  });
}

function eventHandlers(){
  //set up event handlers
}
