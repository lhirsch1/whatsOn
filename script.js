
$('#button').on('click',function() {
    getShowtimes()
});

function getShowtimes () {
    event.preventDefault();
var date = $('#date').val();
var zipCode = $('#zipCode').val();
var range = $('#searchRange').val();
// console.log(date)
var queryURLShowtimes = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + date +"&zip=" + zipCode + "&radius=" + range +"&api_key=92rsd8kpdrnkajvyvb42dkug";

$.ajax({
    url: queryURLShowtimes,
    method: "GET"
}).then(function(response) {
    // console.log(response)

    for (i = 0; i < 10; i++) {
        $('#showdata').append(response[i].title + "<br>")
        $('#showdata').append(response[i].showtimes[i].theatre.name + "<br>")
        $('#showdata').append(response[i].showtimes[i].dateTime + "<br>")
        // console.log(response[i].showtimes) 

        // for (y = 0; y <10; y++) {
        // }
        console.log(response[i].showtimes[i].theatre) //returns the theatres 
        console.log(response[i].showtimes[i].dateTime) //returns actual showtime
    }
    
//build an array of theater objects. it will have two key:value pairs. theater, and showtimes.


//populate 2 showtimes per theater

//if theater is in array, then check if the showtimes array is less than 2. 

//else if not in array, then push brand new theater to array.

//if it is less than 2, we can add showtimes

//else if not less than 2, then do nothing

//build the theater objects array from 23

//in another loop OUSTIDE, iterate around theater object array and append.


    


})
}  

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


// Current start of Chris's stuff
// event listener that runs this function to get the service when the search button in clicked
$('#searchSubmitButton').on("click", function() {
    var Title=$('#titleInput').val()
    // console.log("title input ", Title)
    // This is a temp URL for testing, the film is Termniator
    // var titleURL = "https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=Terminator"
    // This code is the actual URL, and the title passed in will go in it
    var titleURL="https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=" + Title
    // This API call gets the ID from the title
    $.ajax({
        url: titleURL,
        method: 'GET'
    }).then(function (response) {

        // This gives the id number for the first one on the list
        // console.log(response.results[0].id)
        // return that title's ID number
        return response.results[0].id;

    }).then(function (movieID) {
        // this URL calls the api with the movie's ID, which returns more detailed info
        var serviceURL = "https://api-public.guidebox.com/v2/movies/" + movieID + "?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861"

        $.ajax({
            url: serviceURL,
            method: 'GET'
        }).then(function (response) {
            //   create a blank local array variable
            var services = [];
            // This for loop runs through the streaming services that movie has
            for (i = 0; i < response.purchase_web_sources.length; i++) {
                // console.log("full id ", response.purchase_web_sources[i].display_name)
                //   Those streaming services are added to the array
                services.push(response.purchase_web_sources[i].display_name)
            }
            // create array containing all of the streaming services
            console.log("services ", services)
            //   That array is returned to whatever called it
            return (services)
        })
    })
})

// A call for the getServices function, only used for testing
// getServices();
// Current end of Chris's stuff

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


