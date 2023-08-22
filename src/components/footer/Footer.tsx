import { IonCard, IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react'
import React from 'react';
import './Footer.css';
import behance from '../../assets/behance.png';
import instagram from '../../assets/instagram.png';
import dribbble from '../../assets/dribbble.png';
import linkedin from '../../assets/linkedin.png';
import messageicon from '../../assets/messageicon.png';

function Footer() {
    return (
        <IonGrid className='mt-5'>
            <IonRow>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0' ></IonCol>
                <IonCol sizeXl='8' sizeLg='8' sizeXs='12' >
                    <IonRow>
                        <IonCol sizeXl='4' sizeLg='4' sizeXs='8'>
                            <IonCard className='ft-card'>
                                <a href='https://www.behance.net/navynaveen' target='blank'><IonImg className='float-on-hover' src={behance}></IonImg></a>
                                <a href='https://www.instagram.com/naveen_ui_craft/' target='blank'><IonImg className='float-on-hover' src={instagram}></IonImg></a>
                                <a href='https://dribbble.com/Nivan' target='blank'><IonImg className='float-on-hover' src={dribbble}></IonImg></a>
                                <a href='https://www.linkedin.com/in/neevank/' target='blank'><IonImg className='float-on-hover' src={linkedin}></IonImg></a>
                            </IonCard>
                        </IonCol>
                        <IonCol sizeXl='7' sizeLg='7' sizeXs='0'></IonCol>
                        <IonCol sizeXl='1' sizeLg='1' >
                            <IonImg className='ft-messageicon floating' src={messageicon}></IonImg>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0' ></IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Footer