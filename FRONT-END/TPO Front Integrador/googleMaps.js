const stores = [
  { lat: -34.60094934888355, lng: -58.374922321642416 },
  { lat: -34.58896791090863, lng: -58.42025930445151 },
  { lat: -34.5765693511179, lng: -58.41749350578164 },
  { lat: -34.58484378058235, lng: -58.4093578029501 },
  { lat: -34.61990245562309, lng: -58.461522015222975 },
  { lat: -34.59548112225746, lng: -58.495979109568374 },
];


// Styles a map in night mode and light.
const styles = {
  default: [],
  night: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ],
};




function initMap() {
  
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.58819329363501, lng: -58.44262590713367 },
    zoom: 13,
    mapTypeControl: false,
  });

  let marker= stores.map(position=>{
    return new google.maps.Marker({
      position: position,
      map,
      title: "Hello World!",
    });
  })
  
  //if the class name is dark-theme set the styles in night
  if (document.body.className === "dark-theme") {
    map.setOptions({ styles: styles.night });
  }
}