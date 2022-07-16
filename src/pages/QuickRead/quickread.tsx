import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox, checkmark, checkmarkCircle, chevronForward, close, closeCircle, closeCircleOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import './quickread.css';

const QuickRead: React.FC = () => {
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

            <IonContent fullscreen className='background'>
                <IonToolbar className='welcome-bar'>
                    <div className='welcome-text'>Welcome Back</div>
                    <div className='user-name'>Michael</div>
                </IonToolbar>
                <IonCard style={{ marginTop: "85px", background: "transparent", dropShadow: 'none', boxShadow: 'none' }}>
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
                <div className='page-break'>
                    <p>Choices for a lifetime</p>
                    <div style={{ textAlign: 'left', marginLeft: '10%' }}>
                        <h2><a onClick={(e) => showModal(e)}>Provide for loved ones</a></h2>
                        <h2><a onClick={(e) => showModal(e)}>Minimize taxes</a></h2>
                        <h2><a onClick={(e) => showModal(e)}>Protext your assets from creditors</a></h2>
                        <h2><a onClick={(e) => showModal(e)}>Advance medical directives</a></h2>
                        <h2><a onClick={(e) => showModal(e)}>Asset management</a></h2>
                        <h2><a onClick={(e) => showModal(e)}>Guardianship</a></h2>
                    </div>
                </div>
                <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
                    <IonHeader>
                        <IonToolbar style={{ '--border': 'none', '--boxShadow': 'none', '--background': '#f3f3f3', '--borderStyle': 'none' }}>
                            <IonButtons slot="end">
                                <IonButton onClick={() => dismiss()}><IonIcon color='dark' icon={closeCircleOutline}></IonIcon></IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <div style={{ position: 'absolute', top: '10%', left: '40%' }}>
                            <img src='assets/logos/treeicon.svg' />
                        </div>
                        <div className='card-modal-text' style={{ position: 'absolute', top: '30%', }}>
                            <span style={{ fontSize: '25px', color: '#316094' }}>{title}</span><br />
                            The most important objective is ensuring your loved ones are provided for if you
                            and/or your spouse become incapacitated or pass away. Your loved ones include  surviving spouse, children (especially minor children) and more remote descendants, such as grandchildren, nieces and nephews, and even pets.
                        </div>
                    </IonContent>
                </IonModal>
            </IonContent>
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
        </IonPage>
    );
};

export default QuickRead;