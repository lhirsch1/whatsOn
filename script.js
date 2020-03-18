var format = 'tvshow';
var title = '';
var actor = '';
var genreArray = [];
var subscriptionArray = [];
var genreContainer = $('.genreContainer');


//function changes css of search buttons when clicked
$('.searchBtn').on('click', function () {
    //checks if search button has been clicked already
    if ($(this).hasClass('searchBtnClicked')) {
        //removes clicked styling
        $(this).removeClass('searchBtnClicked');
        //appends unclicked styling
        $(this).addClass("searchBtn");
    }
    else {
        //adds clicked styling
        $(this).addClass('searchBtnClicked');
        //removes unclicked styling
        $(this).removeClass('searchBtn');
    }
})
//function is run if user wants to search TV shows
$('#tvBtn').on('click', function () {
    var thisText = $(this).text();
    //if tvBtn has already been selected
    if ($(this).hasClass('searchBtnClicked')) {
        $('#movieBtn').removeClass('searchBtnClicked');
        format = 'tvshow';
        genreContainer.show();
    }
})

$('#movieBtn').on('click', function () {
    var thisText = $(this).text();
    var genreContainer = $('.genreContainer');
    if ($(this).hasClass('searchBtnClicked')) {
        $('#tvBtn').removeClass('searchBtnClicked');
        format = 'movie';

        //genre array is not relevant to movies and is cleared
        genreArray = [];
        //strips buttons of clicked styling and appends unclicked
        $('.genreBtn').removeClass('searchBtnClicked');
        $('.genreBtn').addClass('searchBtn');
        //hides genre container
        genreContainer.hide();


    }
    else {
        //take out of array
        var thisIndex = genreArray.indexOf(thisText);
        genreArray.splice(thisIndex, 1);

    }
})





// $('#movieBtn').on('click', function () {
//     var thisText = $(this).text();
//     if ($(this).hasClass('searchBtnClicked')) {

//     }
    
// })


//onclick function adds selected genre to array
$('.genreBtn').on('click', function () {
    var thisText = $(this).text();
    if ($(this).hasClass('searchBtnClicked')) {
        genreArray.push(thisText);
    }
    else {
        //take out of array
        var thisIndex = genreArray.indexOf(thisText);
        genreArray.splice(thisIndex, 1);

    }
})


//handles subscription options
$('.subscriptionBtn').on('click', function () {
    var thisText = $(this).text();
    if ($(this).hasClass('searchBtnClicked')) {
        //adds subscription service to array
        subscriptionArray.push(thisText);
    }
    else {
        //take out of array
        var thisIndex = subscriptionArray.indexOf(thisText);
        subscriptionArray.splice(thisIndex, 1);
    }
})


//search form submit button listener
$('.searchForm').submit(function(e) {
    e.preventDefault();
    //holds user input for title and actor
    //may have to put in lowercase for api
    title = $('#titleInput').val();
    actor = $('#actorInput').val();
    console.log('format = '  + format + ' title = ' + title +  ' actor = ' + actor + ' genres = ' + genreArray + ' subscriptions = ' + subscriptionArray )
});