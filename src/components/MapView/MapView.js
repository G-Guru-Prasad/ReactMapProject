import React, { useEffect, useState } from "react";

import "./MapView.css";
import {GOOGLE_API_KEY} from "../../constants";
import SearchBox from "../SearchBox/SearchBox";
import UseMyLocation from "../UseMyLocation/UseMyLocation";
import GoogleMapReact from 'google-map-react';

function getMarker(biz){
  return(
    <div class="marker" lat={biz.coordinates.latitude} lng={biz.coordinates.longitude} text={biz.name}
      name={biz.id} onClick={(event) => handleMarkerClick(event, biz.id)}>
          <i class="fi-marker"> </i>
        </div>
  )
}

function handleMarkerClick(event, biz_id){
  const highlightedElems = document.querySelectorAll('.highlighted');
  highlightedElems.forEach(function (elem) {
    elem.classList.remove('highlighted');
  })
  document.querySelector('.MapView [name="' + biz_id + '"]').classList.add('highlighted');
  document.querySelector('.ListView [name="' + biz_id + '"]').classList.add('highlighted')
}

export default function MapView(props) {
  const [markers, setMarkers] = useState(props.biz)
  const [mapCenter, setMapCenter] = useState(props.loc)

  useEffect( () => {
    if (props.biz[0]){
      const mapCenterLoc = {'lat':props.biz[0].coordinates.latitude, 'lng':props.biz[0].coordinates.longitude}
      console.log('mapCenterLoc', mapCenterLoc)
      setMapCenter(mapCenterLoc) 
    }
    setMarkers(props.biz)
  }, [props.biz])

  return (
    <div id="map-view" className="MapView">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY,
                            libraries:['places'],}}
        center={mapCenter}
        zoom={15}
      >
        <div class="marker" {... props.loc} text="Test Marker">
          <i class="fi-marker"> </i>
        </div>

        {
          markers.map(getMarker)
        }

      </GoogleMapReact>

      <div className="SearchBoxContainer">
        <SearchBox { ...props} onSearchChange={props.onSearchChange} />
      </div>
      <div className="UseMyLocationContainer">
        <UseMyLocation  { ...props} />
      </div>
    </div>
  );
}
