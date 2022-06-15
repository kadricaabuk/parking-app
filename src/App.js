import {
  useIonModal,
  IonModal
} from "@ionic/react";
import { useState } from "react";
import "./App.css";
import Venue from "./components/Venue/Venue";
import {IonPage, IonApp} from '@ionic/react'


function App() {
  return (
    <div className="App">
      <IonApp>
        <IonPage>
        <Venue />
        </IonPage>
      </IonApp>
    </div>
  );
}

export default App;
