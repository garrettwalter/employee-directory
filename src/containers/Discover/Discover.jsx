import axios from 'axios';
import React, { Component } from 'react';


class Discover extends Component {

    state = {
        count: 0,
        image: "",
        cell: "",
        email: "",
        city: "",
        state: "",
        country: "",
        firstName: "",
        lastName: "",
    };

    componentDidMount(){
        this.getNewEmployee();
    }

    getNewEmployee = () => {
        axios
            .get("https://randomuser.me/api/")
            .then((response)=> {
                console.log(response);
                this.setState({image: response.data.results[0].picture.large});
                this.setState({cell: response.data.results[0].cell});
                this.setState({email: response.data.results[0].email});
                this.setState({city: response.data.results[0].location.city});
                this.setState({state: response.data.results[0].location.state});
                this.setState({country: response.data.results[0].location.country});
                this.setState({firstName: response.data.results[0].name.first});
                this.setState({lastName: response.data.results[0].name.last});
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render() {
        return (
            <>
            <div className="row">
                <h2 className="col d-flex justify-content-center p-3">Meet a random employee:</h2>
            </div>
            <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="card">
                <div className="col d-flex justify-content-center p-3">
                    <img src={this.state.image} alt="employee"/>
                </div>
                    <div className="card-header col d-flex justify-content-center">
                    {this.state.firstName} {this.state.lastName}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item col d-flex justify-content-center">{this.state.cell}</li>
                        <li className="list-group-item col d-flex justify-content-center">{this.state.email}</li>
                        <li className="list-group-item  col d-flex justify-content-center">{this.state.city}, {this.state.state}, {this.state.country}</li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div class="col text-center p-3">
                    <button class="btn btn-dark" onClick={this.getNewEmployee}>NEW</button>
                 </div>
            </div>
            </>
        );
    }
}

export default Discover;