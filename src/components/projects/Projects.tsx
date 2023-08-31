import React, { useState } from 'react'
import './Project.css';
import { IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRoute, IonRow, IonText } from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { projectdatajson } from './Projectdatajson';
import { card } from 'ionicons/icons';


function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = (redirectTo: string) => () => {
    window.location.href = redirectTo; // Redirect to the specified URL
  };

  return (
    <IonGrid className='mt-5'>
      <IonRow>
        <IonCol sizeXl='2' sizeLg='2' sizeXs='0'></IonCol>
        <IonCol sizeXl='8' sizeLg='8' sizeXs='12'>
          <IonRow>
            <IonCol className='text-center' size='12'>
              <IonText className='pr-Title'>PROJECTS</IonText><br />
              <IonText className='pr-subtitle'>Latest Projects</IonText>
            </IonCol>
            <IonCol sizeXl='12' sizeLg='12' sizeXs='12'>
              {/* <Swiper
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={2.5}
              > */}
              <IonRow>
                {projectdatajson.map((data, key) => {
                  return (
                    <IonCol sizeLg='6' sizeXs='12' className={`card-containers ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      <IonCard className='pr-card-style cards' key={key} target='_blank' onClick={handleCardClick(data.href)} rel="noopener noreferrer">
                        <IonImg  src={data.thumbnail}></IonImg>

                        <IonCardContent>
                          {isHovered &&
                            <h3 className='pj-title-link'>{data.title}</h3>
                          }
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  )
                })}
              </IonRow>
              {/* {projectdatajson.map((data, key) => {
                  return (
                    <SwiperSlide  key={key}>
                      <IonCard className='pr-card-style' key={key} href={data.href}>
                        <IonImg src={data.thumbnail}></IonImg>
                        <IonText className='pr-card-title'>{data.title}</IonText>
                      </IonCard>
                    </SwiperSlide>
                    
                  )
                })} */}
              {/* </Swiper> */}
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol sizeLg='2' sizeXs='0'></IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default Projects