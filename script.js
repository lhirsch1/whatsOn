var date = $('#date');
var zipCode = $('#zipCode');
var range = $('#searchRange');

function openModal() {
  var modalTitle = $('.modal-title');
    // render the error message to the modal title h5 element
    modalTitle.text('Enter Your Preferences');
    $('#myModal').modal('show');
}

function saveUserInfo(){
  alert('in saveUserInfo');
  date = $('#date').find('input[name="dateInput"]').val();
  zipCode = $('#zipCode').find('input[name="zipCode"]').val();
  range = $('#range').find('input[name="range"]').val();
}

$('#getUserInfo').on('click', openModal);
$('#saveButton').on('click', saveUserInfo);

