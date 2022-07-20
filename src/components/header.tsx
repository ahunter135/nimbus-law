import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import { chatbox } from "ionicons/icons";

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar className='toolbar'>
                <IonButtons slot="end">
                    <IonMenuButton className="menu" />
                    <IonButton className="menu">
                        <IonIcon slot="icon-only" style={{ fontSize: '20px' }} icon={chatbox} />
                    </IonButton>
                </IonButtons>
                <IonTitle className='logo'><span className="nimbus">nimbus</span> <span className='legacy'>legacy<br />guide</span></IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
