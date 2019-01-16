import React, { Component } from 'react';
import objectToQueryString from 'app/utils/objectToQueryString';
import Map from 'app/components/ui/Map';
import Button from 'app/components/ui/Button';
import { Title, ButtonWrapper } from './elements';

const DEFAULT_CENTER = {
  lat: -34.9209098815918,
  lng: -56.150474548339844
};

class Home extends Component {
  state = { lat: null, lng: null };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords: { latitude: lat, longitude: lng } } = position;
        this.setCenter({ lat, lng });
      });
    } else {
      this.setCenter(DEFAULT_CENTER);
    }
  }

  setCenter = ({ lat, lng }) => {
    this.setState({ lat, lng });
  }

  search = () => {
    const { history } = this.props;
    const { lat, lng } = this.state;
    const query = objectToQueryString({ lat, lng });
    history.push(`/results${query}`);
  }

  render() {
    const { lat, lng } = this.state;
    return (
      <div>
        <Title>
          Search for restaurants near to you!
        </Title>
        <Map
          handleClick={this.setCenter}
          center={{ lat, lng }}
          zoom={14}
        />
        <ButtonWrapper>
          <Button onClick={this.search}>
            Search
          </Button>
        </ButtonWrapper>
      </div>
    );
  }
}

export default Home;
