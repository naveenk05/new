import React from 'react';
import './Contactus.css';
import { IonCard, IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import contactbg from '../../assets/conatctus_bg.png';

function Contactus() {
    const handleMailClick = () => {
        window.location.href = 'mailto:hellonaveen05@gmail.com';
      };
    return (
        <IonGrid className='mt-5'>
            <IonRow>
                <IonCol sizeXl='3' sizeLg='3' sizeXs='0'></IonCol>
                <IonCol sizeXl='6' sizeLg='6' sizeXs='12'>
                    <IonRow  className='justify-content-end'>
                        <IonCol size='4'>
                            <IonImg src={contactbg}></IonImg>
                        </IonCol>
                        <IonCol size='12' className='ct-card-style text-center'>
                            <IonCard className='p-4 ct-card-bg'>
                                <IonText className='ct-title1'>Have any project in mind? <text className='ct-innertext'>Say Hello At</text></IonText><br/>
                                <a href='mailto:hellonaveen05@gmail.com' onClick={handleMailClick}><IonText className='ct-title2'>hellonaveen05@gmail.com</IonText></a>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol sizeLg='3' sizeXs='0'></IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Contactus