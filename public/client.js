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
    
var cats = {
  "categories": {
    "href": "https://api.spotify.com/v1/browse/categories?country=DE&offset=0&limit=10",
    "items": [
      {
        "href": "https://api.spotify.com/v1/browse/categories/toplists",
        "icons": [
          {
            "height": 275,
            "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
            "width": 275
          }
        ],
        "id": "toplists",
        "name": "Top Lists"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/mood",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
            "width": 274
          }
        ],
        "id": "mood",
        "name": "Mood"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/chill",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "chill",
        "name": "Chill"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/hiphop",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
            "width": 274
          }
        ],
        "id": "hiphop",
        "name": "Hip-Hop"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/edm_dance",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "edm_dance",
        "name": "Electronic/Dance"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/pop",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "pop",
        "name": "Pop"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/decades",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/decades_9ad8e458242b2ac8b184e79ef336c455_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "decades",
        "name": "Decades"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/party",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/links/partyicon_274x274.jpg",
            "width": 274
          }
        ],
        "id": "party",
        "name": "Party"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/focus",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
            "width": 274
          }
        ],
        "id": "focus",
        "name": "Focus"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/family",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/ab1e1dbf-1ea2-403e-8c11-5dba87c9c720.jpg",
            "width": null
          }
        ],
        "id": "family",
        "name": "Kids & Family"
      }
    ],
    "limit": 10,
    "next": "https://api.spotify.com/v1/browse/categories?country=DE&offset=10&limit=10",
    "offset": 0,
    "previous": null,
    "total": 35
  }
}
    
    
    // Display the covers of the playlists
    data.items.map(function(playlist, i) {
      var img = $('<img class="cover-image"/>');
      img.attr('src', playlist.images[0].url);
      img.appendTo('#category-playlists-container');
    });
  });
  
  $.get('/audio-features', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /audio-features', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // The audio features we want to show
    var keys = ["danceability", "energy", "acousticness"]
    
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
  });
  
  $.get('/artist-top-tracks', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /artist-top-tracks', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the audio features
    data.map(function(track, i) {
      var trackName = $('<li>' + track.name + '</li>');
      trackName.appendTo('#top-tracks-container');
    });
  });

});
