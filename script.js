var date = $('#date');
var zipCode = $('#zipCode');
var range = $('#searchRange');

function openModal() {
  var modalTitle = $('.modal-title');
    // render the error message to the modal title h5 element
    modalTitle.text('Enter Your Preferences');
    $('#myModal').modal('show');
}

function getUserInfo(){
  alert('in getUserInfo');
  date = $('#date').find('input[name="dateInput"]').val();
  zipCode = $('#zipCode').find('input[name="zipCode"]').val();
  range = $('#range').find('input[name="range"]').val();
}

$('#getUserInfo').on('click', openModal);
$('#nextButton').on('click', getUserInfo);

// if (localStorage.getItem('mod') != null){
//     alert ('yes');
//   } else {
//     console.log("Memory empty");
//     var modalTitle = $('.modal-title');
//     // render the error message to the modal title h5 element
//     modalTitle.text('Enter Your Preferences');
//     $('.carousel').carousel({
//         interval: false
//       })
//     $('#myModal').modal('show');

//   }