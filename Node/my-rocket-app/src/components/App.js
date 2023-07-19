import './App.css';
import FailLaunch from './FailLaunch';
import SuccessLaunch from './SuccessLaunch';
import Modal from './Modal';
import LaunchTrigger from './LaunchTrigger';
import useLauncher from '../hooks/useLauncher'
import { useEffect, useState } from 'react';

function App() {
  const [failLaunch, setFailLaunch] = useState(false);
  const [successLaunch, setSuccessLaunch] = useState(false);
  const [launchResult, launch] = useLauncher(null);

  useEffect(() => {
    if(launchResult === null) {
      closeModals();
    }
    else{
      setFailLaunch(!launchResult);
      setSuccessLaunch(launchResult);
    }
  }, [launchResult]);

  const closeModals = () => {
    setFailLaunch(false);
    setSuccessLaunch(false);
  }

  return (
    <div className="container">
      <LaunchTrigger onFormSubmit={ launch }/>
      <Modal isShowing={ failLaunch }
             hide={ closeModals }
             body={<FailLaunch/>}/>
      <Modal isShowing={ successLaunch }
             hide={ closeModals }
             body={<SuccessLaunch/>}/>
    </div>
  );
}

export default App;
