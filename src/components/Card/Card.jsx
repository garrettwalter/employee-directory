import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="col d-flex justify-content-center p-3">
                    <img src={props.image} alt="employee"/>
                </div>
                    <div className="card-header col d-flex justify-content-center">
                    {props.firstName} {props.lastName}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item col d-flex justify-content-center">{props.cell}</li>
                        <li className="list-group-item col d-flex justify-content-center">{props.email}</li>
                        <li className="list-group-item  col d-flex justify-content-center">{props.city}, {props.state}, {props.country}</li>
                    </ul>
                </div>
        </div>
    );
};

export default Card;