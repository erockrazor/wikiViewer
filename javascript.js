$(document).ready(function() {

  // var searchInput = document.getElementById(searchBox).submit();
  // console.log(searchBox.search.value);


  $("#searchBox").submit(function(event){
    console.log("hello");
    console.log($("#searchTerm").text());
    // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Richard%20Feynman&format=json
    // $.getJson("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + userSearch.value + "&format=json&callback=?",function(response) {
    //           console.log('title', response.query.search[0].title);
    //           console.log('title');
    //           console.log("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + response.value + "&format=json&callback=?");
    // });
  });

  $( "#target" ).submit(function( event ) {
    console.log(searchTerm.value);
    event.preventDefault();
    var wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm.value + "&format=json&callback=?";
    $.getJSON( wikiAPI, function(response) {
      console.log(wikiAPI);
      console.log(JSON.stringify(response,null, 2));
      console.log(response[1][0]);
      $(".results").empty();
      for (var x = 1; x < response.length || x < 10; x++){
              // console.log('title', response.query.search[x]);
              // console.log(response.length);
              // console.log(wikiAPI);
              $(".results").append('<a href="'+response[3][x]+'"><div class="row border"><h2>'+ response[1][x] + '</h2></a></div><div class="row"><p>' + response[2][x] +'...</p></div>');
            }
    });
  });

});
