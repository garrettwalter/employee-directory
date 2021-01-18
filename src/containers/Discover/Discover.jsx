import axios from 'axios';
import React, { Component } from 'react';
import API from "../../API/API.js";


class Discover extends Component {

    state = {
        count: 0,
        image: "",
    };

    componentDidMount(){
        this.getNewEmployee();
    }

    getNewEmployee = () => {
        axios
            .get("https://randomuser.me/api/")
            .then((response)=> {
                console.log(response);
                this.setState({image: response.data.results[0].picture.medium})
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    // handleLike = () => {
    //     API.search()
    //     .then(res => this.setState({ image: res.data.message}))
    //   .catch(err => console.log(err));
      
    // };

    // handleDislike = () => {
    //     API.search()
    //     .then(res => this.setState({ image: res.data.message }))
    //   .catch(err => console.log(err));
    // }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <img src={this.state.image} alt="employee"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;