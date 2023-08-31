// ContactForm.tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
} from '@ionic/react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <IonItem>
        <IonLabel position="stacked" color="primary">
          Name
        </IonLabel>
        <IonInput
          value={name}
          onIonChange={(e) => setName(e.detail.value!)}
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked" color="primary">
          Email
        </IonLabel>
        <IonInput
          type="email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked" color="primary">
          Message
        </IonLabel>
        <IonTextarea
          rows={4}
          value={message}
          onIonChange={(e) => setMessage(e.detail.value!)}
          required
        />
      </IonItem>
      <IonButton
        type="submit"
        expand="full"
        shape="round"
        color="primary"
        className="ion-margin-top"
      >
        Submit
      </IonButton>
    </form>
  );
};

export default ContactForm;
