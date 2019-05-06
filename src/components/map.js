import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: props.locations,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };
    // var bounds = new this.props.google.maps.LatLngBounds();
    // bounds.extend(lat, 42.39, lng, -72.52);
    // for (let i of this.state.location) {
    // //   this.state.name.push(i.name);
    // //   this.state.capital.push(i.capital);
    // //   this.state.lat.push(i.latitude);
    // //   this.state.long.push(i.longitude);
    //     bounds.extend(lat:'1',long:'1');
    // }

    const locationMapper = (
      <div>
        <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
        <Marker />
      </div>
    );

    // const locationMapper = this.state.location.map(function(list,index){
    //   <div>
    //     <Marker
    //       key={index}
    //       name={list.name}
    //       title={list.capital}
    //       position={{ lat: list.latitude, lng: list.longitude }}
    //     />

    //     <Marker
    //       title={"The marker`s title will appear as a tooltip."}
    //       name={"SOMA"}
    //       position={{ lat: 37.778519, lng: -122.40564 }}
    //     />

    //     {/* <InfoWindow
    //       marker={this.state.activeMarker}
    //       visible={this.state.showingInfoWindow}
    //     >
    //       <div>
    //         <h1>{this.state.selectedPlace.name}</h1>
    //       </div>
    //     </InfoWindow>
    //     <InfoWindow onClose={this.onInfoWindowClose}>
    //       <div />
    //     </InfoWindow> */}
    //   </div>;
    // });

    return (
      <div style={style}>
        <Map google={this.props.google} zoom={3}>
          <Marker
            name={"Dolores park"}
            position={{ lat: 37.759703, lng: -122.428093 }}
          />
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyCwO_zeKZ9hDaXiP-ZM_rrSC21X_0KoPe8`
})(map);
