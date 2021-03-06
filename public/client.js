// client-side js
// run by the browser each time your view template is loaded

$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    
    var trackName = $('<h3> <a href=" ' + data.external_urls.spotify + ' " target="blank"  > ' + data.name + ' </a> </h3>');
    trackName.appendTo('#search-track-container');
    
    // <h3><a href="${data.external_urls.spotify}" >${data.name}</a></h3> 
    
    var artists = '';
    data.artists.forEach(function(element){
      artists = artists + element.name + '' ;
      console.log('hello');
    });
    
    var artistName = $('<h3>' + data.artists[0].name + '</h3>');
    artistName.appendTo('#search-track-container');
    
    // Display the album art
    var img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
  $.get('/category-playlists', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /category-playlists', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
  });
  
  //experiemental code
    $.get('/tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // name of track 
    for(var i = 0; i < data.length; i++) {
      console.log(data[i].name);
      var findName = $('<h3>' + data[i].name + '</h3>');
      findName.appendTo('#name'); 
    }
    
});
  
  $.get('/audio-features', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness", "liveness", "loudness"]
    
    // Display the audio features
    keys.map(function(key, i) {
      if (data.hasOwnProperty(key)) {
        var feature = $('<p><span class="big-number">' + data[key] + ' </span>'  + key + '</p>');
        feature.appendTo('#audio-features-container');
      }
    });
  });
  
  $.get('/artist', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the artist's image
    var img = $('<img class="circle-image" />');
    img.attr('src', data.images[0].url);
    img.appendTo('#artist-container');
    
    // Display the artist name
    var trackName = $('<h3>' + data.name + '</h3>');
    trackName.appendTo('#artist-container');
    
    // Display the artist's genres
    data.genres.map(function(genre, i) {
      var genreItem = $('<p>' + genre + '</p>');
      genreItem.appendTo('#artist-container');
    });
    
    //display artist's popularity
    var pop = $('<h3> Popularity score = ' + data.popularity + '</h3>');
    pop.appendTo('#artist-container');
    
     //display number of followers
    var fol = $('<h3>' + data.followers.total + ' followers </h3>');
    fol.appendTo('#artist-container');
    
    });
  $.get('/artist-top-tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
      console.log(data[0].artists[0].name);
      var findArtist = $('<h3>' + data[0].artists[0].name + '</h3>');
      findArtist.appendTo('#top-tracks-container'); 
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container');
    });
  });

});
