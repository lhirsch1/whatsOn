// EVERYONES VARIABLE DECLARATIONS
// Lukas' variables
var format = 'tvshow';
var title = '';
var actor = '';
var genreArray = [];
var subscriptionArray = [];
var genreContainer = $('.genreContainer');
var genreString = "";
var genreArray = []; 

// John's variables
var date = $('#date');
var zipCode = $('#zipCode');
var range = $('#searchRange');


$('#button').on('click',function() {
    getShowtimes()
});

function getShowtimes () {
    event.preventDefault();
var date = $('#date').val();
var zipCode = $('#zipCode').val();
var range = $('#searchRange').val();
// console.log(date)
var queryURLShowtimes = "https://data.tmsapi.com/v1.1/movies/showings?startDate=" + date +"&zip=" + zipCode + "&radius=" + range +"&api_key=92rsd8kpdrnkajvyvb42dkug";

$.ajax({
    url: queryURLShowtimes,
    method: "GET"
}).then(function(response) {
    // console.log(response)

    for (i = 0; i < 10; i++) {

        var showtime = response[i].showtimes[i].dateTime;
        console.log(new Date(showtime))

        $('#showdata').append(response[i].title + "<br>")
        $('#showdata').append(response[i].showtimes[i].theatre.name + "<br>")
        $('#showdata').append(new Date(showtime) + "<br>");
        // console.log(response[i].showtimes) 

        // for (y = 0; y <10; y++) {
        // }
        console.log(response[i].showtimes[i].theatre) //returns the theatres 
        console.log(new Date(date)) //returns actual showtime
    }
    
})
}  

// START OF JOHN'S STUFF
// Variables -> at the top


// JOHN'S FUNCTIONS
// Open the modal to get user preferences
function openUserPrefsModal() {
  var modalTitle = $('.modal-title');
    modalTitle.text('Enter Your Preferences');
    
    $('#myModal').modal('show');
}

//  Save the user info entered into the user prefs modal
function saveUserInfo(){
  zipCode = $('#zipCode').val();
  range = $('#searchRange').val();
  console.log(zipCode + "  " +  range);
  console.log('genreArray  ' + genreArray);
  // only update local storage if something is entered
  if(zipCode !== "") {
      localStorage.setItem('zipCode', zipCode);
  }  
  if(range !== "") {
      localStorage.setItem('range', range);
  }  
  if(genreArray.length !== 0) {
      localStorage.setItem('genres', genreArray);
  }
  renderUserPrefs();    
}

// open user prefs modal if none are stored in local storage
function checkUserPrefs() {
    // check if local storage is empty (zipCode required)
    if (localStorage.getItem("zipCode") === null) {
        openUserPrefsModal();
    } else{
        // retrieve user prefs from local storage
        zipCode = localStorage.getItem('zipCode');
        userRange = localStorage.getItem('range');
        parseGenreArray();
        
        // console.log("ls zip code:  " + zipCode);
        // console.log("ls range:  " + range);
        // console.log("ls genre string:  " + genreString);
        // parse the string from local memory into array genreArray
        // console.log(genreArray);
        renderUserPrefs();
    }
}

// set genreArray to the current preferences
function parseGenreArray() {
    // read in genres from local storage, save to string
    genreString = localStorage.getItem('genres');
    if(genreString === null) {
        genreArray = [];
    } else {
        // convert the string from local storage into genreArray[
        genreArray = genreString.split(",");
        localStorage.setItem('genres', genreArray);
    }
    console.log(genreArray);
    //place current user preferences into the modal
    placeUserPrefs();
}

function placeUserPrefs() {
    
    zipCode = localStorage.getItem('zipCode');
    $('#zipCode').attr('value', zipCode);
    range = localStorage.getItem('range');
    $('#searchRange').attr('value', range);
    // set buttons for current genres active
    // $(".genreBtn").click(function(){
    //     if(clicked){
    //         $(this).css('background-color', 'red');
    //         clicked  = false;
    //     } else {
    //         $(this).css('background-color', 'blue');
    //         clicked  = true;
    //     }  
    var genreBtns = ["Action", "Comedy", "Horror", "Drama", "SciFi", "Family"];
    for (let i=0; i<genreArray.length; i++) {
         switch(genreArray[i]) {
             case "Action":
                $('#actionBtn').css({'background-color': 'black', "color": "white"});
                break;
            case "Comedy":
                $('#comedyBtn').css({'background-color': 'black', "color": "white"});
                break; 
            case "Horror":
                $('#horrorBtn').css({'background-color': 'black', "color": "white"});
                break;
            case "Drama":
                $('#dramaBtn').css({'background-color': 'black', "color": "white"});
                break;
            case "SciFi":
                $('#scifiBtn').css({'background-color': 'black', "color": "white"});
                break;
            case "Family":
                $('#familyBtn').css({'background-color': 'black', "color": "white"});
                break;
         }
    } 
}

 

function renderUserPrefs() {
    // render current user preferences to the screen
    $('#userZip').text('Your zip code is:  ' + zipCode);
    $('#userRange').text('Your search range is:  ' + userRange);
    $('#userGenres').text('Your favorite genres are:  ' + genreArray);
    
}

//  END OF JOHN'S FUNCTIONS

/////////    CODE TO RUN ON LOAD    //////
parseGenreArray();
checkUserPrefs();

// JOHN'S EVENT LISTENERS
// Open user prefs modal
$('#getUserInfo').on('click', openUserPrefsModal);
// Save user preferences 
$('#saveButton').on('click', function() {
    saveUserInfo();
})
// Clear local storage
$('#clearButton').on('click', function() {
    localStorage.clear();
})

// END OF JOHN'S EVENT LISTENERS
//  END OF JOHN'S STUFF





// CURRENT START OF CHRIS'S STUFF



//  create a function called randomMovies()

// call guidebox api and randomly select some movie IDs 

// call each of those movie IDs and return one Netflix and one Hulu (and maybe one Disney +)

// TODO do this to other two
// TODO get a better placeholder image
function randomMovies(){
    var randomID;


    // 
    // start first ajax
    $.ajax({
        url: "https://api-public.guidebox.com/v2/movies?limit=250&api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861" ,
        method: 'GET'
        // and first ajax and start first "then"
    }).then(function (response) {
       
        var everyID=[];
        for (i=0; i<response.results.length; i++){
        // console.log("full list of small info ", response.results[i].id)
            everyID.push(response.results[i].id)

        }

        // console.log("IDarray ", everyID)

        // console.log("random number ", Math.floor(Math.random()*250))


        randomID=everyID[Math.floor(Math.random()*250)]

        // console.log("randomID ", randomID)


        return randomID;

        // End first "then" and start second "then"
    }).then(function (randomID){

        $.ajax({
            url: "https://api-public.guidebox.com/v2/movies/" + randomID + "?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861",
            method: 'GET'

            // end secons ajax and start third "then"
        }).then(function(response){

            // TODO render this to the page
            console.log("Full: ", response)
             console.log("Title: ", response.title)
            console.log("Year: ", response.release_year)
            console.log("Plot: ", response.overview)
            console.log("Image link: ", response.poster_120x171)
            console.log("Services: ", response.subscription_web_sources)

            var serviceNames=[]

            
            if (response.subscription_web_sources.length===0){
                $("#randomTitleOne").empty()

                $("#randomTitleOne").append("Still Loading...")
                console.log("Still Loading...")
                randomMovies()

            }
            else{


           
            

            for (i=0; i<response.subscription_web_sources.length; i++){

                serviceNames.push(response.subscription_web_sources[i].display_name)
                if (i<response.subscription_web_sources.length-1){
                    serviceNames.push(", ")
                }
            }

            console.log("All service names: ", serviceNames)
        //TODO make sure movies with NO services aren't returned
        // TODO consider getting plot from OMDB instead
        // TODO Consider forcing plot to be a word limit with ... if too long
            
            $("#randomTitleOne").empty()
            $("#randomPlotOne").empty()
            $("#randomServicesOne").empty()


            $("#randomTitleOne").append(response.title, " (",response.release_year, ")" )
            
            $("#randomPlotOne").append("Plot: ", response.overview)

            $("#randomServicesOne").append("Services: ", serviceNames)

            $("#randomImageOne").attr("src", response.poster_240x342)

             }


            // end third "then"
        })


        // end second "then"
    })

// end function
}

randomMovies();


// This creates a GLOBAL blank array
var FullArray=['']

// event listener for STREAMING SEARCH
// When search button is clicked, the API is called and a list of titles matching the title the user inputted is pulled 
$('#searchSubmitButton').on("click", function() {
            //  This empy function makes it so only one set of streaming services appears on screen at a time
            $("#serviceList").empty()
    // This Title variable is the user input
    var Title=$('#titleInput').val()
    // This code is the actual URL, and the title the user inputted will go in it
    var titleURL="https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&query=" + Title +  "&field=title"
    // This API call gets all matching titles and their ID numbers
    $.ajax({
        url: titleURL,
        method: 'GET'
    }).then(function (response) {
        // This List Titles variable is made to hold each indicidual title, which are placed in it through a for loop
        var ListTitles=[]
        for (i=0; i<response.results.length; i++){
            ListTitles.push(response.results[i].title)
        }

        // we set our global variable to our results, because we'll need them later,
        FullArray=response.results
        // and we call the renderTitles() function, passing in out list of titles
        renderTitles(ListTitles)
    })
//This ends the event listener's callback function
})

// event listener for THEATER SEARCH
// When search button is clicked, the API is called and a list of titles matching the title the user inputted is pulled 
$('#theaterSearchButton').on("click", function() {
    // This Title variable is the user input
    var Title=$('#titleInput').val()
    // This code is the actual URL, and the title the user inputted will go in it
    var titleURL="https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&query=" + Title +  "&field=title"
    // This API call gets all matching titles and their ID numbers
    $.ajax({
        url: titleURL,
        method: 'GET'
    }).then(function (response) {
        // This List Titles variable is made to hold each indicidual title, which are placed in it through a for loop
        var ListTitles=[]
        for (i=0; i<response.results.length; i++){
            ListTitles.push(response.results[i].title)
        }

        // we set our global variable to our results, because we'll need them later,
        FullArray=response.results
        // and we call the renderTitles() function, passing in out list of titles
        renderTitles(ListTitles)
    })
//This ends the event listener's callback function
})

// This function takes the list of titles, and renders them all to the page in the form of buttons
function renderTitles(ListTitles){
    
    // first we empty the div, incase there's anything already there
       $("#titleSelect").empty()
    // then we create the titleButton variable, which we'll use to create a <button> element, "Button-Title" class, and add the List Titles through a for loop, and append these buttons
   var titleButton;
   for (i=0; i<ListTitles.length; i++){
   titleButton=$("<button>")    
   titleButton.attr("class", "Button-Title")
   titleButton.text(ListTitles[i])
   

    $("#titleSelect").append(titleButton)
   }

//    Then we call the assignClick function, to ready a new event listeners to our new buttons. We also pass in the ListTitles again
   assignClick(ListTitles);

}

// This assignClick function adds eventlisteners to the new buttons
// The button clicked will indicate that is the EXACT title the user wants, so that button's text will be put into a variable, (SelectedTitle)
// we will find the index of that title in regards to the full list of titles in ListTitles, (SelectedNumber),
// then we'll call the getInfo() function, passing in the ID number, which we got from using the SelectedNumber on the global FullArray

function assignClick(ListTitles){
    $(".Button-Title").on("click", function(event) {
        event.preventDefault()
        console.log("the test is working ", $(this).text())
    
    var SelectedTitle=$(this).text()
    var SelectedNumber=(ListTitles.indexOf(SelectedTitle))
    
    getInfo(FullArray[SelectedNumber].id);
        
    })
    
    }

    // This function will call the API, using the desired film's ID Number, will create  "services" array whcih is a list of streaming services that stream the selected film,
    // and it will call the renderServices function, passing in that list of services
    function getInfo(movieID) {
        // this URL calls the api with the movie's ID, which returns more detailed info
        var serviceURL = "https://api-public.guidebox.com/v2/movies/" + movieID + "?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861"

        $.ajax({
            url: serviceURL,
            method: 'GET'
        }).then(function (response) {
            //   create a blank local array variable
            var services = [];
            // This for loop runs through the streaming services that movie has
            for (i = 0; i < response.subscription_web_sources.length; i++) {
                //   Those streaming services are added to the array
                services.push(response.subscription_web_sources[i].display_name)
            }
            // create array containing all of the streaming services
            console.log("services ", services)
            //   That array is sent to the render services function
            renderServices(services)
        })
    }

    // This function puts the streaming services on the screen
    function renderServices(services) {

        ListServices = ["This title is on: "]

        for (i = 0; i < services.length; i++) {
            ListServices.push(services[i])

            if (i !== (services.length - 1)) {
                ListServices.push(", ")
            }
        }
        //  This empy function makes it so only one set of streaming services appears on screen at a time
        $("#serviceList").empty()
        //  This puts the streaming services on the page

        if (services.length===0){

            ListServices="This title is currently not on any known streaming service."
        }
        
        $("#serviceList").append(ListServices)


        // TODO have a different message if no streaming services are available
    }




// CURRENT END OF CHRIS'S STUFF








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


//search form submit button listener for STREAMING SEARCH
// $('.searchForm').submit(function(e) {
//     e.preventDefault();
//     //holds user input for title and actor
//     //may have to put in lowercase for api
//     title = $('#titleInput').val();
//     actor = $('#actorInput').val();
//     console.log('format = '  + format + ' title = ' + title +  ' actor = ' + actor + ' genres = ' + genreArray + ' subscriptions = ' + subscriptionArray )
// });
