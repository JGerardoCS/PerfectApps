import './SuccessLaunch.css';
import { useEffect, useState } from 'react';
import rocket from '../rocket.svg'

const SuccessLaunch = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count > 0)
        {
            let timer = setTimeout(() => {
                setCount((count) => count - 1);
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    });

    return (
        <div className="row justify-content-md-center">
            <img src={rocket} className="rocket-logo" alt="rocket"/>
            <h1>{count}</h1>
        </div>
    );
};

export default SuccessLaunch;