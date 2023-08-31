import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import './Maincontent.css';

import naveenprofile from '../../assets/naveenprofile.png';
import behance from '../../assets/behance.png';
import instagram from '../../assets/instagram.png';
import dribbble from '../../assets/dribbble.png';
import linkedin from '../../assets/linkedin.png';
import PopoverComponent from '../popup/PopUp';


function Maincontent() {
    const [popoverState, setPopoverState] = useState({
        isOpen: false,
        event: null, // Change undefined to null
    });

    const openPopover = (e: React.MouseEvent) => {
        setPopoverState({
            isOpen: true,
            event:null,
        });
    };

    const closePopover = () => {
        setPopoverState({
            isOpen: false,
            event: null, // Change undefined to null
        });
    };

    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
                <IonCol sizeXl='5' sizeLg='5' sizeXs='12' className='mt-5'>
                    <IonText className='mc-text1'>Welcome to my sites</IonText><br />
                    <IonText className='mc-text2'>Hi! i’m Naveen<br />
                        UI UX <text className='mc-text3'>Designer</text></IonText><br />
                    <IonText>Experienced product and visual interface designer with expertise in UI/UX, product development, and responsive web design.</IonText><br />
                    <IonRow>
                        <IonCol sizeXl='6' sizeLg="6" className='mt-3'>
                            <button className='mc-hirebtn' type='button' onClick={openPopover}>Hire me</button>&nbsp;&nbsp;
                            <a href={`${window.location.origin}/Naveen_resume_designer.pdf`} target='blank'>
                                <button className='mc-getcvbtn' type='button'>Get CV</button></a>
                        </IonCol>
                        <PopoverComponent
                            isOpen={popoverState.isOpen}
                            onClose={closePopover}
                            event={popoverState.event}
                        />
                    </IonRow>
                    <IonRow>
                        <IonCol sizeXl='6' sizeLg='6' sizeXs='8'>
                            <IonCard className='mc_card '>
                                <a href='https://www.behance.net/navynaveen' target='blank'><IonImg className='float-on-hover' src={behance}></IonImg></a>
                                <a href='https://www.instagram.com/naveen_ui_craft/' target='blank'><IonImg className='float-on-hover' src={instagram}></IonImg></a>
                                <a href='https://dribbble.com/Nivan' target='blank'><IonImg className='float-on-hover' src={dribbble}></IonImg></a>
                                <a href='https://www.linkedin.com/in/neevank/' target='blank'><IonImg className='float-on-hover' src={linkedin}></IonImg></a>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                </IonCol>
                <IonCol sizeLg='3' sizeXs='0' className='mt-3 floating'>
                    <IonCard className='mc-cardbg'>
                    </IonCard>
                    <IonImg className='mc_image' src={naveenprofile}>
                    </IonImg>
                </IonCol>
                <IonCol sizeLg='2' sizeXs='0'></IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default Maincontent