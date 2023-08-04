import React from 'react';
import './Whatido.css';
import { IonCard, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import appicon from '../../assets/appicon.png';
import illustrationicon from '../../assets/illustractoricon.png';
import uiuxicon from '../../assets/UiUxicon.png';
import webicon from '../../assets/webicon.png';
import { whatidojsondata } from './whatdatajson';


function WhatIdo() {
    return (
            <IonGrid className='mt-5'>
                <IonRow>
                    <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
                    <IonCol sizeXl='8' sizeLg='8' sizeXs='12'>
                        <IonCard className='wi-cardstyle'>
                            <IonRow className='mt-4'>
                                <IonCol className='text-center' sizeLg='12' sizeXs='12'>
                                    <IonText className='wi-Title'>WHAT I DO</IonText><br />
                                    <IonText className='wi-subtitle'>SPECILIZING IN</IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow className='wi-padding'>
                                {
                                    whatidojsondata.map((data, key) => (
                                        <IonCol sizeXl='6' sizeLg='6' sizeXs='12'  key={key} className='p-4'>
                                            <IonRow>
                                                <IonCol size='2'>
                                                    <IonImg src={data.icon}></IonImg>
                                                </IonCol>
                                                <IonCol size='10'>
                                                    <IonText className='wi-title1'>{data.title}</IonText><br />
                                                    <IonText className='wi-subtitle1'>{data.subtitile}</IonText>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    ))
                                }
                            </IonRow>
                        </IonCard>
                    </IonCol>
                    <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
                </IonRow>
            </IonGrid>
    )
}

export default WhatIdo