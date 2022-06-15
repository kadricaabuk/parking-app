import React from 'react'
import {
    IonPage,
    IonContent,
    IonModal,
    useIonModal,
    IonAvatar,
    IonButtons,
    IonButton
  } from "@ionic/react";
  import { useState } from "react";
  import ModalBody from '../ModalBody/ModalBody';
  
  import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

  import ParkIcon from "../../assets/icons/pink-park-icon.svg"
  import VipIcon from "../../assets/icons/vip-icon.svg"
  import RightArrow from "../../assets/icons/right-arrow-icon.svg"
  import Direction from "../../assets/icons/direction-icon.svg"
  import VerifyIcon from "../../assets/icons/verified-icon.svg"
  import NotifyIcon from "../../assets/icons/notify-icon.svg"
  
  import Img1 from "../../assets/img/img1.jpg"
  import Img2 from "../../assets/img/img2.jpg"
  import Img3 from "../../assets/img/img3.jpg"
  import Img4 from "../../assets/img/img4.jpg"

  import './Venue.css'

const Venue = () => {
  const [haveVipCode, sethaveVipCode] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [ verify, setVerify ] = useState(false);
  const [ availability, setAvailability ] = useState(true);

  const code = 'TESTCODE';
  
  
  const [ open, setOpen ]  = useState(false)
  const closeModal = () => {
    setOpen(false)
  }

  const [present, dismiss] = useIonModal(ModalBody, {
    dismiss: () => dismiss()
  });

  const modalOptions = {
    onDismiss: () => dismiss(),
    breakpoints: [0, 0.2, 0.7, 1 ],
    initialBreakpoint: 1,
    backdropBreakpoint: 0.2
  }

  const verifyVipCode = () => {
    if(codeInput === code)
      setVerify(true);
      sethaveVipCode(true)
  }

  const NoAvailable = () => (
    <div className='flex justify-center items-center text-center flex-col space-y-[23px]'>
      <div className='w-[117px] h-[117px] border-pink border-[8px] rounded-full flex justify-center items-center text-center '>
        <p className='text-[12px] font-semibold'>No availability</p>
      </div>
      <button className='border-button rounded-full w-[263px] h-[56px] flex items-center justify-center text-center'>
        <img src={NotifyIcon} alt='' className='mr-[10px]'/>
        Notify me when available
      </button>
    </div>
  )

  return (
    <IonContent fullscreen>
        <div className="content ">
        <div className="flex flex-row items-center justify-start text-left">
          <div className="float-left ion-margin-end">
            <IonAvatar className="w-[52px] h-[52px] bg-white mt-[16px] mb-[16px] ml-[16px]">
              <img className="w-[24px] h-[16px]" src={''} alt="" />
            </IonAvatar>
          </div>
          <div className="">
            <h3 className="text-[14px] text-white m-0">ICA Nära, Sveavägen 7</h3>
            <p className="text-[14px] text-subwhite">1.5 km</p>
          </div>
        </div>
        
        <div className="radius bg-white p-[16px] h-[1000px]">
         <div className="flex flex-col text-center justify-center items-center">
           <h3 className="font-semibold">Venu Name B</h3>
           {
            availability === false ? <NoAvailable /> : <CircularProgressBar percentage={30} colour="#34D298"/>
           }
         </div>
         <div className="text-primary">
            <h4 className="font-semibold mb-1">Pricing</h4>
            <p className="text-[14px] font-normal">You are allowed to stay here for 4 hours.</p>
          </div>

          <div className="mt-[22px] text-primary flex justify-between items-center mb-[40px]">
            <div>
              <p className="text-[16px] font-medium flex space-x-2">
                <img src={ParkIcon} className="w-[30px] h-[24px]" alt=""/>
                Parking Cost</p>
            </div>
            <div>
              <p className="text-[22px] font-bold">
                free</p>
            </div>
          </div>
              
            {
             haveVipCode === true && verify === false ? (
              <label htmlFor="c" className="">
            <div className={`border-[1px] text-primary border-opacity-50 p-[20px] rounded-xl`}>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
              <img src={VipIcon} className="w-[30px] h-[24px] mr-2" alt=""/>
                <span className="text-[14px] font-semibold">I have VIP code</span>
                
              </div>
              <input style={{textTransform: 'uppercase'}} id="c" type="checkbox" className={`accent-purple ml-4`} value={haveVipCode} onChange={(e) => sethaveVipCode(!haveVipCode)}/>
              </div>
                <div className="relative flex items-center">
                  <input type={'text'} value={codeInput} 
                  onChange={(e) => {
                    
                    setCodeInput(e.target.value.toUpperCase())
                  }}
                  className="block border-[1px] border-primary border-opacity-30 mt-[40px] p-[15px] rounded-xl w-full focus:border-opacity-70 focus:ring-blue-500 focus:outline-0 focus:border-primary"/>
                  <button onClick={verifyVipCode} className="absolute flex justify-center items-center text-center rounded-xl right-[7px] bottom-[7px] bg-primary w-[39px] h-[39px]">
                    <img src={RightArrow} alt=""/>
                  </button>
                </div>
                </div>
          </label>
              )
              : haveVipCode === true && verify === true ?
              (
                <label htmlFor="c" className="">
            <div className={`border-[1px] text-primary border-opacity-50 p-[20px] rounded-xl`}>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
              <img src={VipIcon} className="w-[30px] h-[24px] mr-2" alt=""/>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold">I have VIP code</span> 
                  <span className="text-[14px] font-extrabold">Enjoy your %30 discount </span>
                </div>
              </div>
              </div>
                <div className="relative flex items-center">
                  <input type={'text'} value={'Code Applied'} disabled onChange={e => setCodeInput(e.target.value)} className="block border-[1px] border-primary border-opacity-30 mt-[40px] p-[15px] rounded-xl w-full focus:border-opacity-70 focus:ring-blue-500 focus:outline-0 focus:border-primary"/>
                  <div className="absolute flex justify-center items-center text-center rounded-xl right-[7px] bottom-[7px]  w-[39px] h-[39px]">
                    <img src={VerifyIcon} alt=""/>
                  </div>
                </div>
                </div>
          </label>
              )
              : haveVipCode === false && verify === false ? 
              (
            <label htmlFor="c" className="">
            <div className={`border-[1px] text-primary border-opacity-50 p-[20px] rounded-xl`}>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
              <img src={VipIcon} className="w-[30px] h-[24px] mr-2" alt=""/>
                <span className="text-[14px] font-semibold">I have VIP code</span>
              </div>
              <input id="c" type="checkbox" className={`accent-purple ml-4`} value={haveVipCode} onChange={(e) => sethaveVipCode(!haveVipCode)}/>
              </div>

                </div>
          </label>
              ) : null
            }


          <div className="mt-[31px] text-primary">
            <h3 className="font-semibold mb-1">Photos</h3>
            <div className="overflow-x-hidden flex flex-row space-x-[12px]">
              <div className="w-[84px] h-[84px] bg-repeat">
                <img className="rounded-xl" src={Img1} alt=""/>
              </div>
              <div className="w-[84px] h-[84px] bg-repeat">
                <img className="rounded-xl" src={Img2} alt=""/>
              </div>
              <div className="w-[84px] h-[84px] bg-repeat">
                <img className="rounded-xl" src={Img3} alt=""/>
              </div>
              <div className="w-[84px] h-[84px] bg-repeat">
                <img className="rounded-xl" src={Img4} alt=""/>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className="bg-gradient-to-t via-white from-white mt-5 flex flex-row justify-between fixed bottom-0 w-full p-[16px]">
          <button className="border-button flex items-center justify-center text-center font-semibold text-primary text-[16px] w-[167px] h-[56px] rounded-full bg-white">
            <img src={Direction} className="mr-[9px]" alt=""/>
            Directions
          </button>
          <button onClick={() => present(modalOptions)} className="flex items-center justify-center text-center font-semibold text-white text-[16px] w-[167px] h-[56px] rounded-full bg-primary">
            Park Here
          </button>
        </div>
        </div>
        <IonModal 
        isOpen={open}
        >
          <ModalBody dismiss={closeModal} />
        </IonModal>
        </IonContent>
  )
}

export default Venue