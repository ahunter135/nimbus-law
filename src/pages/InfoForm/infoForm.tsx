import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox, checkmark, checkmarkCircle, chevronForward, close, closeCircle, closeCircleOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/footer';
import Header from '../../components/header';
import WelcomeBar from '../../components/WelcomeBar';
import '../Page.css';

const InfoForm: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const [title, setTitle] = useState("");

    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

    function dismiss() {
        modal.current?.dismiss();
    }
    const showModal = (event: any) => {
        let title = event.target.innerHTML;
        modal.current?.present();
        setTitle(title);
    }
    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className='background'>
                <WelcomeBar />
                <IonCard style={{ marginTop: "85px", background: "#d9dfe3" }}>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow style={{ display: 'flex', alignItems: 'center' }}>
                                <IonCol size="3">
                                    <img src='assets/logos/quickread.svg' />
                                </IonCol>
                                <IonCol>
                                    <p className='card2-text'>Six important objectives in creating your estate plan.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <div className='form'>
                    <IonLabel>Personal Information</IonLabel>
                    <IonList>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Prefix</IonLabel>
                                        <IonSelect placeholder='Mr'>
                                            <IonSelectOption value="Mr">Mr</IonSelectOption>
                                            <IonSelectOption value="Mrs">Mrs</IonSelectOption>
                                            <IonSelectOption value="Miss">Miss</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">First Name</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Preferred Name</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='4'>
                                    <IonItem>
                                        <IonLabel position="stacked">Middle Name</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCol>
                                <IonCol size='4'>
                                    <IonItem>
                                        <IonLabel position="stacked">Last Name</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCol>
                                <IonCol size='3'>
                                    <IonItem>
                                        <IonLabel position="stacked">Suffix</IonLabel>
                                        <IonSelect placeholder='Mr'>
                                            <IonSelectOption value="Mr">Mr</IonSelectOption>
                                            <IonSelectOption value="Mrs">Mrs</IonSelectOption>
                                            <IonSelectOption value="Miss">Miss</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="3">
                                    <IonItem>
                                        <IonLabel position="stacked">Gender</IonLabel>
                                        <IonSelect placeholder='Male'>
                                            <IonSelectOption value="Male">Male</IonSelectOption>
                                            <IonSelectOption value="Female">Female</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Date of Birth</IonLabel>
                                        <IonInput type='date' style={{ width: '75%' }} />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Are you a U.S Citizen?</IonLabel>
                                        <IonSelect placeholder='Yes' style={{ width: '25%' }}>
                                            <IonSelectOption value="yes">yes</IonSelectOption>
                                            <IonSelectOption value="no">no</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Current Street Address</IonLabel>
                                        <IonInput type='text' />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">City</IonLabel>
                                        <IonInput type='text' />
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">State</IonLabel>
                                        <IonSelect>
                                            <IonSelectOption value="yes">yes</IonSelectOption>
                                            <IonSelectOption value="no">no</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Zip Code</IonLabel>
                                        <IonInput type='number' />
                                    </IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Have you ever lived in another state?</IonLabel>
                                    </IonItem>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel>Yes</IonLabel><IonCheckbox />
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel>No</IonLabel><IonCheckbox />
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel style={{ whiteSpace: 'pre-line' }}>If so, add them here beginning with the most recent</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">State</IonLabel>
                                        <IonSelect style={{ width: '100%' }}>
                                            <IonSelectOption value="yes">yes</IonSelectOption>
                                            <IonSelectOption value="no">no</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                </div>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default InfoForm;
