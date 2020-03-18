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
        console.log(response[i].showtimes) 
    }



})
}  

