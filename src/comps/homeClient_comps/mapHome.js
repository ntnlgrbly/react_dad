import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '550px',
};

export class MapHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 32.03373117636093, lng: 34.7667083447235 },
            { lat: 32.03373117636093, lng: 34.7667083447235 },
            { lat: 32.03373117636093, lng: 34.7667083447235 }]

        }
    }
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: 32.03367205741105, lng: 34.76676198893166 }}
            >
                <Marker position={{ lat: 32.03367205741105, lng: 34.76676198893166 }} />
            </Map>
        );

    }


}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCVWjQ8-MDtXWlrOAu1jQWCT--oVyTg0d4'
})(MapHome);