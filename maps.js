function initMap() {
      // The location of Uluru
      var uluru = {lat: 42.4426362, lng: 19.2648666};
      var marker = {lat: 42.4433190, lng: 19.262600};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 16, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: marker, map: map});
    }