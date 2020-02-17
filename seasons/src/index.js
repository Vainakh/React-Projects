import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
          
        if ( !this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>;
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Latitude: {this.state.errorMessage}</div>;
        }
        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
 ); 