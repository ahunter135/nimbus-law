import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox, checkmark, checkmarkCircle, chevronForward, close, closeCircle, closeCircleOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/footer';
import Header from '../../components/header';
import WelcomeBar from '../../components/WelcomeBar';
import '../Page.css';

const QuickRead: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const [title, setTitle] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("");
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

    function dismiss() {
        modal.current?.dismiss();
    }
    const showModal = (event: any, icon: string) => {
        let title = event.target.innerHTML;
        modal.current?.present();
        setTitle(title);
        console.log(icon);
        setSelectedIcon(icon);
    }
    return (
        <IonPage className='backgroundTwo'>
            <Header />
            <IonContent fullscreen className='backgroundTwo'>
                <WelcomeBar />
                <IonCard style={{ marginTop: "85px", background: "transparent", dropShadow: 'none', boxShadow: 'none' }}>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow style={{ display: 'flex', alignItems: 'center' }}>
                                <IonCol size="3">
                                    <img width="70px" src='assets/logos/quickRead.svg' />
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
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Provide for loved ones</a></h2>
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Minimize taxes</a></h2>
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Protext your assets from creditors</a></h2>
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Advance medical directives</a></h2>
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Asset management</a></h2>
                        <h2><a onClick={(e) => showModal(e, 'assets/logos/caring.svg')}>Guardianship</a></h2>
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
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img width="130px" src={selectedIcon} />
                        </div>
                        <div className='card-modal-text' style={{ position: 'absolute', top: '30%', }}>
                            <span style={{ fontSize: '25px', color: '#316094' }}>{title}</span><br />
                            The most important objective is ensuring your loved ones are provided for if you
                            and/or your spouse become incapacitated or pass away. Your loved ones include  surviving spouse, children (especially minor children) and more remote descendants, such as grandchildren, nieces and nephews, and even pets.
                        </div>
                    </IonContent>
                </IonModal>
            </IonContent>
            <Footer children='transparentBackground'/>
        </IonPage>
    );
};

export default QuickRead;
