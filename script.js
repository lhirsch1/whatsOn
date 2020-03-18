 

//  create variable for title
// var title=$("#search-input").val().trim();
function getServices(){
var titleURL="http://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=Terminator"
// var titleURL="http://api-public.guidebox.com/v2/search?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861&type=movie&field=title&query=" + title
    $.ajax({
        url: titleURL,
        method: 'GET'
    
    
      }).then(function(response){
        
        // This gives the id number for the first one on the list
        console.log(response.results[0].id)
        // return that title's ID number
        return response.results[0].id;

      }).then(function(movieID){

        var serviceURL= "http://api-public.guidebox.com/v2/movies/" + movieID + "?api_key=9ac23dfd7609c8b90ee801cff57a64139f7f8861"

        $.ajax({
            url: serviceURL,
            method: 'GET'
          }).then(function(response){
        
            console.log("full id " , response)

          })
      })
}


getServices();


// get services()
// call api with that ID number





// return the streaming services

// dynamically render to the page that movie and the stremaing services