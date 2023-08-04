import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Maincontent from '../components/maincontent/Maincontent';
import WhatIdo from '../components/whatido/WhatIdo';
import Qualification from '../components/qualification/Qualification';
import Expertise from '../components/expertise/Expertise';
import Projects from '../components/projects/Projects';
import Contactus from '../components/contactus/Contactus';
import Footer from '../components/footer/Footer';

const Home: React.FC = () => {
 
  return (

    <IonPage >
     <IonContent>
      <Maincontent/>
      <WhatIdo/>
      <Qualification/>
      <Expertise/>
      <Projects/>
      <Contactus/>
      <Footer/>
     </IonContent>
    </IonPage>

  );
};

export default Home;
