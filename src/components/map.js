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
    this.renderMarkers = this.renderMarkers.bind(this);
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

  renderMarkers() {
    let renderThis = this;

    return renderThis.state.location.map(function(list, index, another) {
      return (
        <Marker
        key={index}
        onClick={renderThis.onMarkerClick}
        name={list.name}
        position={{
            lat: Number(list.latitude),
            lng: Number(list.longitude)
        }}
        />        
      );
    });
  }

  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };

    return (
      <div style={style}>
        <Map
          initialCenter={{
            lat: 49.75,
            lng: 15.5
          }}
          google={this.props.google}
          zoom={3}
          onClick={this.onMapClicked}
        >
          {this.renderMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyCwO_zeKZ9hDaXiP-ZM_rrSC21X_0KoPe8`
})(map);
