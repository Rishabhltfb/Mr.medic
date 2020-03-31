import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import SearchBox from "../../components/SearchBox/SearchBox";
import CardList from "../../components/CardList/CardList";
import axios from 'axios'

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      doctors: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    axios.get("https://evening-dusk-90900.herokuapp.com/api/doctors/all")
      .then(response => {
        // console.log(response.data)
        // console.log(response.data.doctors[0].city)   
        // this.setState({doctors: response.data.doctors.map(doctor => {return doctor.city})})   
        this.setState({doctors: response.data.doctors})
        // console.log("-------------------------------------------")
        // console.log(this.state.doctors.doctors[0].city)
      })
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { doctors, searchfield } = this.state;
    console.log(doctors)
    const filteredDoctors = doctors.filter(doctor => {
        return doctor.city.toLowerCase().includes(searchfield.toLowerCase());
    })
    // const filteredDoctors = doctors.map(doctdata => {
    //   return doctdata.city.toLowerCaase().includes(searchfield.toLowerCase());
    // });
    return (
      <div className="container mt-5 pt-5" id="discover">
        <h1 className="f1">Search Profile</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList filteredDoctors={filteredDoctors} />
        </Scroll>
      </div>
    );
  }
}

export default Discover;
