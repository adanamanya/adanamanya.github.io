<script>
function myMap() {
    console.log("ahahha");
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5DYaK8NkLUXUmROK2ujhQHlmEzOKaH4E&callback=myMap"></script>





