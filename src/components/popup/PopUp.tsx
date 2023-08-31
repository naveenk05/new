// PopoverComponent.tsx
import React from 'react';
import { IonCard, IonPopover } from '@ionic/react';
import ContactForm from '../contactform/ContactForm';

interface PopoverComponentProps {
    isOpen: boolean;
    onClose: () => void;
    event: Event | null; // Change undefined to null
}

const PopoverComponent: React.FC<PopoverComponentProps> = ({
    isOpen,
    onClose,
    event,
}) => {
    return (
        <IonPopover isOpen={isOpen} onDidDismiss={onClose} event={event}>
            <ContactForm />
        </IonPopover>
    );
};

export default PopoverComponent;
