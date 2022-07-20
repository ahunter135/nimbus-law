
import { IonButton, IonButtons, IonCol, IonFooter, IonGrid, IonHeader, IonIcon, IonMenuButton, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { chatbox } from "ionicons/icons";

const Footer: React.FC = () => {
    return (
        <IonFooter>
            <IonToolbar className='background'>
                <IonGrid>
                    <IonRow style={{ display: "flex", alignItems: "center" }}>
                        <IonCol size="3">
                            <img className="footer-image" src='assets/logos/attorney.svg' />
                        </IonCol>
                        <IonCol>
                            YOUR TEAM<br />
                            <strong>John C. Doe</strong><br />
                            Attorney at Law, Doe and Partners<br />
                            johnd@estateplans.com
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
