var date = $('#date');
var zipCode = $('#zipCode');
var range = $('#searchRange');

function openModal() {
  var modalTitle = $('.modal-title');
    modalTitle.text('Enter Your Preferences');
    $('#myModal').modal('show');
}

function saveUserInfo(){
  date = $('#date').val();
  zipCode = $('#zipCode').val();
  range = $('#searchRange').val();
  console.log(date + "  " + zipCode + "  " +  range);
  localStorage.setItem('date', date);
  localStorage.setItem('zipCode', zipCode);
  localStorage.setItem('range', range);
}

$('#getUserInfo').on('click', openModal);
$('#saveButton').on('click', function() {
    saveUserInfo();
})

