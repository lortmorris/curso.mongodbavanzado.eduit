var map;
var infowindow;

var bsas = {lat: -34.595129, lng: -58.444244};

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: bsas,
        zoom: 15
    });

}

function getPokemons(long, lat, distance){

    $.ajax({
        type: "POST",
        url: "/getpokemons",
        data: {query:{long: long, lat: lat, distance: distance}},
        success: function ( data) {
            console.log("pokemons:",  data);
            data.forEach(p =>{
                p.location.lng = p.location.coordinates[0];
                p.location.lat = p.location.coordinates[1];
                p.photos[0] = "/images/pokemons/"+p.photos[0];
                createMarker(p);
            });
        },
        dataType: "json"
    });
}

function createMarker(item) {
    var marker = new google.maps.Marker({
        map: map,
        position: item.location,
        title: item.name,
        icon: "/images/pokestop.png"
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">'+item.name+'</h1>'+
        '<div id="bodyContent">'+
        '<img src="'+item.photos[0]+'"/>'+
        '</div>'+
        '</div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map, this);
    });



}