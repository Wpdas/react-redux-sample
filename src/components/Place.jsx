import React from 'react';
import { connect } from 'react-redux';
import * as placeActions from '../store/place/action';

class Place extends React.Component {
  constructor(props) {
    super(props);

    this.handlerOnChangeCity = this.handlerOnChangeCity.bind(this);
    this.handlerOnChangeCountry = this.handlerOnChangeCountry.bind(this);
  }

  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }

  handlerOnChangeCity(event) {
    const { onUpdateCity } = this.props;
    onUpdateCity(event.target.value);
  }

  handlerOnChangeCountry(event) {
    const { onUpdateCountry } = this.props;
    onUpdateCountry(event.target.value);
  }

  render() {
    const { city, country } = this.props.place;

    return (
      <React.Fragment>
        <div>City: {city}</div>
        <input type="text" value={city} onChange={this.handlerOnChangeCity} />
        <div>Country: {country}</div>
        <input type="text" value={country} onChange={this.handlerOnChangeCountry} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    place: state.place
  }
}

const mapActionToProps = {
  fetchInitialData: placeActions.fetchInitialData,
  onUpdateCity: placeActions.onUpdateCity,
  onUpdateCountry: placeActions.onUpdateCountry
}

export default connect( mapStateToProps, mapActionToProps)(Place);