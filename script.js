


// This function should be called when the search button is clicked, and the title that needs to be searched will be passed in
function getServices(title) {
    // This is a temp URL for testing, the film is Termniator
    // var titleURL = "https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=Terminator"
    // This code is the actual URL, and the title passed in will go in it
    var titleURL="https://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=" + title
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
            // console.log("services ", services)
            //   That array is returned to whatever called it
            return (services)
        })
    })
}

// A call for the getServices function, only used for testing
// getServices();


