import React from 'react'
import {
    IonButton,
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    IonItem,
    IonRange
  } from "@ionic/react";
import { useEffect, useState, useRef } from 'react'

import './ModalBody.css'

import CloseModalIcon from "../../assets/icons/Close.svg"
import ParkIcon from "../../assets/icons/white-park-icon.svg"
import PhotoIcon from "../../assets/icons/photo-icon.svg"
import BlueParkIcon from "../../assets/icons/blue-park-icon.svg"
import ClockIcon from "../../assets/icons/clock-icon.svg"
import Car from "../../assets/img/car.png"


import { CreateAnimation, Animation } from '@ionic/react';

const ModalBody = ({ dismiss, type }) => {



  const [value, setValue] = useState(0);
  const [ show, setShow ] = useState(false)
  

  useEffect(() => {
    console.log(value)
    if(value === '140'){
      setShow(true);
      
    }else{
      setShow(false)
    }
  },[value])

    return (
    <>
        <IonContent fullscreen>
 
            <div className="p-[16px]">
              <div className="flex justify-between items-center text-center ">
                <div className="flex -space-x-2 overflow-hidden"> 
              
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="">
                {
                  show === true ? (<p className="text-primary text-[16px] font-semibold animate__animated   animate__fadeInDown">Park</p>) : (<p className="text-primary text-[12px] font-normal ">ICA Nära, Sveavägen 7</p>)
                }
                </div>
                <div>
                  <button onClick={dismiss}>
                    <img src={CloseModalIcon} alt=""/>
                  </button>  
                </div>
              </div>
              
              <div className={`flex justify-center items-center text-center`}>
                <div className="mt-[98px] bg-blue h-[130px] w-[340px] rounded-3xl border-r-[7px] border-primary flex items-center justify-center text-center">
                  <div className='rounded-3xl w-[300px] border-r-[1px] border-t-[1px] border-b-[1px] border-primary border-opacity-20 '>
                    <img className='' style={{
                      position: "relative",
                      left: `${value-100}px`,
                      }} src={Car} alt="" />
                  </div>
                </div>
              </div>
              { show === true ?

              
                <div className=' p-[16px] '>
                  <div className='bg-white shadow-card rounded-xl mt-[33px] p-[14px] animate__animated animate__fadeIn firstIn'>
                    <div className='flex space-x-2'>
                      <img src={BlueParkIcon} alt=''/>
                      <span className='text-[18px] font-semibold'>Parking</span>
                    </div>
                    <div className='flex space-x-2 justify-between items-center text-center mt-[23px]'>
                      <div className='flex space-x-1'>
                        <img src={ClockIcon} alt=''/>
                        <span className='text-[14px] font-medium'>Elapsed time</span> 
                      </div>
                      <div>
                        <p className='text-[22px] font-bold'>04:21:36</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[32px]'>
                  <div className='flex space-x-2 justify-between items-center text-center mt-[23px] px-[3px] animate__animated animate__fadeIn secondIn'>
                    <div className='flex space-x-1 justify-between items-center text-center'>
                      <div className='bg-purple w-[10px] h-[10px] rounded'></div>
                      <span className='text-[14px] font-medium'>Parking cost</span> 
                    </div>
                    <div>
                      <p className='text-[22px] font-bold'>45<span className='text-[16px] font-normal'>kr</span></p>
                    </div>
                  </div>
                  <div className='mt-[24px]'>
                    {/* RANGE INPUT  */}
                  </div>
                  </div>
                </div>
            : null
            }
            </div>
            <div className={`w-full bg-primary rounded-t-3xl text-white flex flex-col items-center justify-center text-center p-[36px] absolute bottom-0`}>
            {
              show === true ?
              (
                
                    <div className='mb-9'>
                      <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-[16px] font-medium'>Total cost</p>
                          </div>
                          <div>
                            <p className='text-[26px] font-bold'>3.24<span className='text-[16px] font-normal'>kr</span></p>
                          </div>
                      </div>
                      <div>
                        <p className='text-subwhite mt-[9px]'>Swipe back to end</p>
                      </div>
                    </div>

              )  : 
              (
              <div className='flex flex-col items-center justify-center text-center mb-[54px]'>
                <div className='flex space-x-2'>
                  <img src={ParkIcon} alt=''/>
                  <span className='text-[14px] font-normal'>Park</span>
                </div>
                <div className='mt-[23px] '>
                  <h3 className='text-[22px] font-medium'>
                  Swipe to start park session
                  </h3>
                </div>
              </div>
              )
            }
              <div className=''>
            <input
            className='car-range'
            type={'range'}
            min="0"
            max="140"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
          </div>
       {
        show === true ? null : (
          <div>

        

          <div className='mt-[62px] p-3 bg-white bg-opacity-[.1] rounded-xl w-[311px] h-[67px] flex justify-between items-center text-center'>
            <div className='flex space-x-2 font-normal text-[14px] italic'>
              <img src={PhotoIcon} alt=''/>
              <p>Parked in my place</p>
            </div>
            <div>
              <button className='border-0 bg-opacity-0'>
                Report
              </button>
            </div>
          </div>

        </div>
        )
       }
            </div>


          
        </IonContent>
    </>
      
    )
  }

  export default ModalBody