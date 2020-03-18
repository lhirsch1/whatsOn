//Variables that need defining: startDate <--input type date, zipCode <--input type text, range

$('#button').on('click',function() {
    getShowtimes(),
});

function getShowtimes () {
var date = $('#date').val(),
var zipCode = $('#zipCode').val(),
var range = $('#searchRange').val(),

var queryURLShowtimes = "http://data.tmsapi.com/v1.1/movies/showings?" + date +"&" + zipCode + "&" + range +"&api_key=92rsd8kpdrnkajvyvb42dkug";

$.ajax({
    url: queryURLShowtimes,
    method: "GET"
}).then(function(response))
}    

// Define many variables based on user input
    
// URL will be surrounded by IF statments reliant on those variables (title, actor, year, genre, etc)


    // console.log("search " + searchTerm);
    // console.log("URL " + queryURL);

    // function defineURL
    // if input isn't null
    // var searchThing= "& blah blah ="+  $.(input thing)
    // else
    // var searchThing=""

   

    // $.ajax({
    //       url: queryURLguide,
    //       method: 'GET'


    //     // }).then(function(response){
          
    //     //   console.log(response)
    //     //   // reference the values for the  Rating, Poster, Year, and Plot

    //     //   // Object Deconstruction(referenceing the values in one line)

    //     //   var {name, thumb_url, tracker_count, upcoming_event_count} = response;

    //     //   console.log(name, thumb_url, tracker_count, upcoming_event_count)

    //     //   // create HTML elements for our data
    //     //   var artistName = $("<div>")
    //     //   var tracker=$("<div>")
    //     //   var upcoming=$("<div>")
    //     //   var Thumbnail=$("<img>")

    //     //   // Now we need to append the text to where we will put it

    //     //   artistName.text("Name: "+name)
    //     //   tracker.text("People Tracking this band: "+tracker_count)
    //     //   upcoming.text("Number of upcoming events: "+upcoming_event_count)
    //     //   // add src to image
    //     //   Thumbnail.attr("src", thumb_url)

    //     //   // Append new content to the page

    //     //   $('#artist-div').prepend(artistName, tracker, upcoming, Thumbnail)



    //     })

    //     //   // create HTML elements for our data
    //     //   var artistName = $("<div>")
    //     //   var tracker=$("<div>")
    //     //   var upcoming=$("<div>")
    //     //   var Thumbnail=$("<img>")

    //     //   // Now we need to append the text to where we will put it

    //     //   artistName.text("Name: "+name)
    //     //   tracker.text("People Tracking this band: "+tracker_count)
    //     //   upcoming.text("Number of upcoming events: "+upcoming_event_count)
    //     //   // add src to image
    //     //   Thumbnail.attr("src", thumb_url)

    //     //   // Append new content to the page

    //     //   $('#artist-div').prepend(artistName, tracker, upcoming, Thumbnail)



    //     // })
