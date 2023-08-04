import React from 'react'
import './Qualification.css';
import sideimage from '../../assets/sideimage.png';
import behance from '../../assets/behance.png';
import instagram from '../../assets/instagram.png';
import dribbble from '../../assets/dribbble.png';
import linkedin from '../../assets/linkedin.png';
import figmavectoricon from '../../assets/Figmavectoricon.png';
import develpementicon from '../../assets/devlopementicon.png';

import { IonCard, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';


function Qualification() {
    return (
        <IonGrid className='mt-5'>
            <IonRow>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
                <IonCol className='text-center' sizeLg='8' sizeXs='12'>
                    <IonRow>
                        <IonCol className='text-center' size='12'>
                            <IonText className='ql-Title'>QUALIFICATION</IonText><br />
                            <IonText className='ql-subtitle1'>Education</IonText>&nbsp;| &nbsp;
                            <IonText className='ql-subtitle2'>Experience</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className='border-between'>
                        <IonCol sizeXl='4' sizeLg='4' sizeXs='12'>
                            <IonImg className='ql-sideimage' src={sideimage}></IonImg>
                            <IonCard className='ql-card-socialicon'>
                                <IonText className='ql-followme'>Follow me:</IonText>
                                <a href='https://www.behance.net/navynaveen' target='blank'><IonImg className='float-on-hover' src={behance}></IonImg></a>
                                <a href='https://www.instagram.com/n_a_v_e_e_n.k/' target='blank'><IonImg className='float-on-hover' src={instagram}></IonImg></a>
                                <a href='https://dribbble.com/Nivan' target='blank'><IonImg className='float-on-hover' src={dribbble}></IonImg></a>
                                <a href='https://www.linkedin.com/in/neevank/' target='blank'><IonImg className='float-on-hover' src={linkedin}></IonImg></a>
                            </IonCard>
                        </IonCol>
                        <IonCol sizeXl='4' sizeLg='4' sizeXs='12' className='align-self-center ql-line'>
                            <IonCard className="card" >
                                <IonImg className='ql-figmaicon' src={figmavectoricon}></IonImg>
                                <IonText className='ql-text-justify'>
                                    I have two years of experience using Figma and creating wireframes and prototypes. During this time, I have successfully completed several projects that showcase my proficiency in user interface design and interaction. I am confident in my ability to deliver high-quality designs that align with user needs and business objectives.
                                </IonText>
                            </IonCard>
                        </IonCol>
                        <IonCol sizeXl='4' sizeLg='4' sizeXs='12' className='align-self-center'>
                            <IonCard className="card" >
                                <IonImg className='ql-figmaicon' src={develpementicon}></IonImg>
                                <IonText className='ql-text-justify'>Aside from design work, I also have one year of hands-on experience in development. I specialize in frontend development, proficiently working with HTML, CSS, Bootstrap, Ionic, and React. My skillset includes crafting responsive websites and developing intuitive Ionic applications."
                                </IonText>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonCol>
                <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
            </IonRow>

        </IonGrid>
    )
}

export default Qualification