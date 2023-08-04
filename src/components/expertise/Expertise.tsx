import { IonCard, IonCol, IonGrid, IonIcon, IonImg, IonRow, IonText } from '@ionic/react'
import './Expertise.css';
import { expertisedatajson } from './Expertisedatajson';
import React, { useState } from 'react'
import Rating from 'react-rating';
import { star } from 'ionicons/icons';

function Expertise() {
    return (
        <IonGrid className='mt-5'>
            <IonRow>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
                <IonCol sizeXl='8' sizeLg='8' sizeXs='12'>
                    <IonRow>
                        <IonCol className='text-center' sizeXl='12' sizeLg='12'>
                            <IonText className='ex-Title'>EXPERTISE</IonText><br />
                            <IonText className='ex-subtitle'>SPECIAL SKILLS</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        {expertisedatajson.map((data, key) => (
                            <IonCol key={key} sizeXl='3' sizeLg='3' sizeXs='6'>
                                <IonCard className='text-center ex-card'>
                                    <IonImg className='ex-appimages' src={data.image}></IonImg>
                                    <IonText className='ex-appname'>{data.appname}</IonText><br />
                                    {Array.from({ length: 5 }).map((val, i) => (
                                        <IonIcon style={{ color: "#444851" }} key={i} icon={star} />
                                    ))}
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonCol>
                <IonCol sizeLg='2' sizeXs='0'></IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Expertise

