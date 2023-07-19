import './FailLaunch.css'
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

const FailLaunch = () => {
    return (
        <div className="row justify-content-md-center">
            <p>Rocket Id Not Found</p>
        </div>
    );
};

export default FailLaunch;