import React, { Component } from "react";
// import Scroll from "../../components/Scroll/Scroll";
import SearchBox from "../../components/SearchBox/SearchBox";
import PatientCardList from "../../components/PatientCardList/PatientCardList";

import axios from "axios";

class DiscoverPatient extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://evening-dusk-90900.herokuapp.com/api/patients/all")
      .then(response => {
        // console.log(response.data.patients)
        // console.log(response.data.patients[0].city)
        // this.setState({patients: response.data.patients.map(doctor => {return doctor.city})})
        this.setState({ patients: response.data.patients });
        // console.log(this.state.patients)
        // console.log("-------------------------------------------")
        // console.log(this.state.patients.patients[0].city)
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { patients, searchfield } = this.state;
    // console.log(patients)
    const filterPatient = patients.filter(patient => {
        return patient.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="container mt-5 pt-5">
        <h1 className="f1">Search Patients</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <Scroll> */}
          <PatientCardList filterPatient={filterPatient} />
        {/* </Scroll> */}
      </div>
    );
  }
}
export default DiscoverPatient;
