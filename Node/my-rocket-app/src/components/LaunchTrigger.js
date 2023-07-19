import React, { useState } from 'react';

const LaunchTrigger = ({onFormSubmit}) => {
    const [rocketId, setRocketId] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(rocketId);
    };

    return (
        <div className="row justify-content-md-center">
            <form onSubmit={ onSubmit } className="col-md-6 mt-2">
                <div className="form-group">
                    <label htmlFor="rocketId">Launch Id:</label>
                    <input id="rocketId"
                           type="number"
                           value={ rocketId }
                           min="0"
                           max="100"
                           className="form-control"
                           onChange={ (e) => setRocketId(e.target.value) }/>
                </div>
                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary mt-2">Launch</button>
                </div>
            </form>
        </div>
    );
};

export default LaunchTrigger;