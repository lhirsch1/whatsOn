var genreArray = [];
var subscriptionArray = [];


//function changes css of search buttons when clicked
$('.searchBtn').on('click', function(){
    console.log("search button")
    if($(this).hasClass('searchBtnClicked')){
        $(this).removeClass('searchBtnClicked');
        $(this).addClass("searchBtn");
    }
    else{
        $(this).addClass("searchBtnClicked");
        $(this).removeClass('searchBtn');
    }
})

$('#tvBtn').on('click', function(){
    var thisText = $(this).text();
    var genreContainer = $('.genreContainer');
    if($(this).hasClass('searchBtnClicked')){
        $('#movieBtn').removeClass('searchBtnClicked');
        genreContainer.show();
        //if tv show show genre
        //unselect movie button
    }
    // else{
    //     //hide genre search
    //     genreContainer.hide();
    // }
})

$('#movieBtn').on('click', function(){
    var thisText = $(this).text();
    var genreContainer = $('.genreContainer');
    if($(this).hasClass('searchBtnClicked')){
        $('#tvBtn').removeClass('searchBtnClicked');
        genreContainer.hide();
        //if tv show show genre
        //unselect movie button
    }
    else{
        //hide genre search
        
    }
})





$('#movieBtn').on('click', function(){
    var thisText = $(this).text();
    if($(this).hasClass('searchBtnClicked')){
    
    }
    else{
        //take out of array
        var thisIndex = genreArray.indexOf(thisText);
        genreArray.splice(thisIndex,1);
        
    }
})


//onclick function adds selected genre to array
$('.genreBtn').on('click', function(){
    var thisText = $(this).text();
    if($(this).hasClass('searchBtnClicked')){
    genreArray.push(thisText);
    }
    else{
        //take out of array
        var thisIndex = genreArray.indexOf(thisText);
        genreArray.splice(thisIndex,1);
        
    }
})


$('.subscriptionBtn').on('click', function(){
    var thisText = $(this).text();
    if($(this).hasClass('searchBtnClicked')){
    subscriptionArray.push(thisText);
    }
    else{
        //take out of array
        var thisIndex = subscriptionArray.indexOf(thisText);
        subscriptionArray.splice(thisIndex,1);
    }
})
