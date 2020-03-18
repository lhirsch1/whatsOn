if (localStorage.getItem('mod') != null){
    alert ('yes');
  } else {
    console.log("Memory empty");
    var modalTitle = $('.modal-title');
    // render the error message to the modal title h5 element
    modalTitle.text('Enter Your Preferences');
    $('.carousel').carousel({
        interval: false
      })
    $('#myModal').modal('show');

  }