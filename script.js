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

