import React, { useEffect, useState } from 'react';
import axios  from 'axios'

import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow
  } from "@react-google-maps/api";
  
  function PlacesMap() {
    // The things we need to track in state
    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [center, setCenter] = useState({ lat: -3.769672, lng: -38.513804 });
    const [zoom, setZoom] = useState(13);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);

    const getLocation = () => navigator.geolocation.getCurrentPosition( data => {
        
        const { latitude , longitude } = data.coords
        
        setCenter( {lat: latitude, lng: longitude })
        setZoom(14)
        getPlaces( latitude, longitude )
    });

    
    const getPlaces =  async (lat, lng) => {
        
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2500&type=restaurant&keyword=cruise&key=AIzaSyCxwVdmWGVpYd9gaJhvkcvT39Cz7ovGMQQ`
        axios.get(url).then( data => console.log(data) )
    }

    useEffect( ( ) => {
        getLocation()
    }, [])
    
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyCxwVdmWGVpYd9gaJhvkcvT39Cz7ovGMQQ' });
  
    const myPlaces = [
        { id: 'I`m here!', pos: { lat: -3.813216 , lng: -38.497791 } },
        { id: 'place01', pos: {
            lat : -3.7910221,
            lng : -38.4814679
         } },
        { id: 'place02', pos: {
            lat : -3.8117855,
            lng : -38.4791812
         } },
        { id: 'place03', pos: {
            lat : -3.800961,
            lng : -38.4797433
         } },
        { id: 'place04', pos: {
            lat : -3.790964,
            lng : -38.484951
         } }
      
    ];

    const loadHandler = map => setMapRef(map);
  
    const markerLoadHandler = (marker, place) => (setMarkerMap(prevState => ({ ...prevState, [place.id]: marker })));
  
    const markerClickHandler = (event, place) => {
      
      if (zoom < 13) setZoom(13);

      setCenter(place.pos)
    };
  
    const renderMap = () => {
      return (
          <GoogleMap
            defaul
            //onLoad={loadHandler}
            center={ center }
            zoom={zoom}
            mapContainerStyle={{ height: "100vh", width: "100%" }}
          >
            {myPlaces.map(place => { 

                const homeMarker = "M46.4,20c-12.6,0-22.9,10.3-22.9,22.9c0,10.4,7.2,19.6,17.2,22.2L45.3,77c0.2,0.5,0.6,0.8,1.2,0.8c0,0,0,0,0,0   c0.5,0,1-0.3,1.2-0.8l4.3-11.8c10.1-2.5,17.4-11.7,17.4-22.2C69.3,30.3,59.1,20,46.4,20z M60,43.5l-4.1-2.7v12.4H37V40.8l-4.1,2.7   L31,40.7l14.5-9.4c0.6-0.4,1.3-0.4,1.8,0l14.5,9.4L60,43.5z"

                const placeMarker = "M 29.269531 22.4375 C 28.816406 22.1875 28.246094 22.351562 27.996094 22.804688 C 27.75 23.261719 27.914062 23.828125 28.367188 24.078125 C 29.484375 24.691406 30.125 25.371094 30.125 25.945312 C 30.125 26.644531 29.132812 27.730469 26.347656 28.675781 C 23.597656 29.609375 19.921875 30.125 16 30.125 C 12.078125 30.125 8.402344 29.609375 5.652344 28.675781 C 2.867188 27.730469 1.875 26.644531 1.875 25.945312 C 1.875 25.371094 2.515625 24.691406 3.632812 24.078125 C 4.085938 23.828125 4.25 23.261719 4.003906 22.804688 C 3.753906 22.351562 3.183594 22.1875 2.730469 22.4375 C 1.484375 23.121094 0 24.285156 0 25.945312 C 0 27.21875 0.875 29.035156 5.046875 30.453125 C 7.988281 31.449219 11.875 32 16 32 C 20.125 32 24.011719 31.449219 26.953125 30.453125 C 31.125 29.035156 32 27.21875 32 25.945312 C 32 24.285156 30.515625 23.121094 29.269531 22.4375 Z M 29.269531 22.4375 M 8.921875 27.320312 C 10.824219 27.859375 13.339844 28.15625 16 28.15625 C 18.660156 28.15625 21.175781 27.859375 23.078125 27.320312 C 25.40625 26.664062 26.585938 25.710938 26.585938 24.492188 C 26.585938 23.269531 25.40625 22.320312 23.078125 21.660156 C 22.5625 21.515625 22 21.386719 21.402344 21.277344 C 21.078125 21.839844 20.734375 22.417969 20.382812 23.011719 C 21.042969 23.109375 21.664062 23.230469 22.226562 23.375 C 23.941406 23.8125 24.566406 24.300781 24.695312 24.492188 C 24.566406 24.679688 23.941406 25.171875 22.226562 25.609375 C 20.605469 26.019531 18.519531 26.257812 16.320312 26.277344 C 16.214844 26.285156 16.109375 26.289062 16 26.289062 C 15.890625 26.289062 15.785156 26.285156 15.679688 26.277344 C 13.480469 26.257812 11.394531 26.019531 9.773438 25.609375 C 8.058594 25.171875 7.433594 24.679688 7.304688 24.492188 C 7.433594 24.300781 8.058594 23.8125 9.773438 23.375 C 10.335938 23.230469 10.957031 23.109375 11.617188 23.011719 C 11.265625 22.417969 10.921875 21.839844 10.597656 21.277344 C 10 21.386719 9.4375 21.515625 8.921875 21.660156 C 6.59375 22.320312 5.414062 23.269531 5.414062 24.492188 C 5.414062 25.710938 6.59375 26.664062 8.921875 27.320312 Z M 8.921875 27.320312 M 16 24.414062 C 16.835938 24.414062 17.59375 23.988281 18.027344 23.277344 C 21.078125 18.285156 24.714844 11.707031 24.714844 8.714844 C 24.714844 3.910156 20.804688 0 16 0 C 11.195312 0 7.285156 3.910156 7.285156 8.714844 C 7.285156 11.707031 10.921875 18.285156 13.972656 23.277344 C 14.40625 23.988281 15.164062 24.414062 16 24.414062 Z M 12.496094 8.117188 C 12.496094 6.183594 14.070312 4.613281 16 4.613281 C 17.929688 4.613281 19.503906 6.183594 19.503906 8.117188 C 19.503906 10.046875 17.929688 11.621094 16 11.621094 C 14.070312 11.621094 12.496094 10.046875 12.496094 8.117188 Z M 12.496094 8.117188 "

                return (
                    <Marker
                        key={place.id}
                        position={place.pos}
                        center={ place.pos }
                        //onLoad={marker => markerLoadHandler(marker, place)}
                        //onClick={event => markerClickHandler(event, place)}
                        icon={{
                        path: place.id === 'I`m here!' ? homeMarker : placeMarker,
                        fillColor: "#000",
                        fillOpacity: 1.0,
                        strokeWeight: 0,
                        scale: 1.25
                        }}
                    />
            )})}
          </GoogleMap>
      );
    };
  
    return isLoaded ? renderMap() : null;
  }



export default PlacesMap;
