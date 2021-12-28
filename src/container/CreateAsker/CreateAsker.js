import React, {useEffect, useRef, useState} from 'react';
import styles from './CreateAsker.module.scss'
import {useNavigate} from "react-router-dom";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import CreateAccount from "../SignUp/CreateAccount";
import Verification from "../SignUp/Verification";
import CreatePassword from "../SignUp/CreatePassword";
import CreateAskerTwo from "./CreateAskerTwo";
import CreateAskerOne from "./CreateAskerOne";
import CreateAskerThird from "../../components/UI/icons/Create/CreateAskerThird";

const CreateAsker = (props) => {
  const [step, setStep] = useState('oneStep');
  const [path, setPath] = useState(['oneStep', 'twoStep', 'thirdStep']);


    const elRef = useRef();
    let navigate = useNavigate()

    const handleContinue = () => {
      // request axios

    };

    // const removeEffect = () => {
    //   elRef.current?.classList.add("ease-out-effect")
    //   const timer = setTimeout(() => {
    //     handleContinue();
    //   }, 1200);
    //   return timer;
    // };

  const nextStep = () => {
    console.log('nextStepLOG');
    const currentStep = path.indexOf(step);
    setStep(path[(currentStep != null && path[currentStep + 1] != null) ? (currentStep + 1) : currentStep]);
  }

  const prevStep = () => {
    const currentStep = path.indexOf(step);
    if (currentStep != null && path[currentStep - 1] != null) {
      setStep(path[currentStep - 1])
    } else {
      setStep(path[currentStep]);
    }
  };


  const renderCreateAsker = () => {
    switch (step) {
      case 'oneStep':
        return <CreateAskerOne nextStep={nextStep}/>;
      case 'twoStep':
        return <CreateAskerTwo nextStep={nextStep} onStepChange={prevStep}/>;
      case 'thirdStep':
        return <CreateAskerThird nextStep={nextStep} onStepChange={prevStep}/>;

      default:
        return null
      // return <Loader className={styles.loading}/>;
    }
  }


  return (
    <div className={styles.createContainerWrap}>
      {
        renderCreateAsker()
      }

    </div>
    )
  }
;

export default CreateAsker;