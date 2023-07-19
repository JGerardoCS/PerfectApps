import { useState } from "react";
import rocketApi from "../apis/rocketApi"

const useLauncher = () => {
    const [launchResult, setLaunchResult] = useState(null);

    const launch = async (rocketId) => {
        setLaunchResult(null);
        const response = await rocketApi
            .get(`/rocket/${rocketId}`)
            .catch(err => {
                let { response } = err;
                return response;
            });
        let wasSuccessfull = false;

        if (response.status === 200)
        {
            wasSuccessfull = true;
        }

        setLaunchResult(wasSuccessfull);
    };

    return [launchResult, launch]
};

export default useLauncher;