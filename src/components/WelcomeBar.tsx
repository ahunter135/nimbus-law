import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import { chatbox } from "ionicons/icons";

const WelcomeBar: React.FC = () => {
    return (
        <IonToolbar className='welcome-bar'>
            <div className='welcome-text'>Welcome Back</div>
            <div className='user-name'>Michael</div>
        </IonToolbar>
    );
};

export default WelcomeBar;
