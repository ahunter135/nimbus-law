import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox, checkmark, checkmarkCircle, chevronForward } from 'ionicons/icons';
import { useParams } from 'react-router';
import Footer from '../../components/footer';
import Header from '../../components/header';
import WelcomeBar from '../../components/WelcomeBar';
import '../Page.css';

const Dashboard: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage className='background'>
            <Header />

            <IonContent fullscreen className='background'>
                <WelcomeBar />
                <IonCard style={{ marginTop: "85px" }}>
                    <IonCardHeader>
                        <IonRow class='header-row'>
                            <IonCol size="5"><span className='estate title'>Your Estate Plan</span></IonCol>
                            <IonCol size="5"><span className='session'>last session - 10.24.22</span></IonCol>
                            <IonCol size="2"><span className='finished'><IonIcon style={{ color: '#7ad855', fontSize: '18px !important', minWidth: '18px' }} icon={checkmarkCircle}></IonIcon>finished</span></IonCol>
                        </IonRow>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size='1'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon></IonCol>
                                <IonCol size='5'><span className='card-body'>Revocable Living Trust</span></IonCol>
                                <IonCol size='1'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon></IonCol>
                                <IonCol size='5'><span className='card-body'>Power of Attorney</span></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='1'></IonCol>
                                <IonCol size='5'><span className='card-body'>Pour Over Will</span></IonCol>
                                <IonCol size='1'></IonCol>
                                <IonCol size='5'><span className='card-body'>Guardianship</span></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='1'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon></IonCol>
                                <IonCol size='5'><span className='card-body'>Medical Directive</span></IonCol>
                                <IonCol size='1'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon></IonCol>
                                <IonCol size='5'><span className='card-body'>Funding Guidance</span></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3" className='card-icon'>
                                    <img className="card-image" src='assets/logos/planVault.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card-2-text-second title'>Your PlanVault</h3>
                                    <p className='card-2-text-second'>Nimbus PlanVault is a digital, secured safebox for your Estate Plan documents. Your trusted executors and beneficiaries can trust your latest wishes are here.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <div className='align-center'>
                            <IonIcon style={{ color: '#7ad855', fontSize: '30px' }} icon={checkmarkCircle}></IonIcon><span className='card-2-text-second title'>Your To Do List</span>
                        </div>
                    </IonCardHeader>
                    <IonCardContent>
                        <div className='blue-container'>
                            <ul>
                                <li>Need Uncle Jim's address</li>
                                <li>New stock information</li>
                                <li>More research on insurance</li>
                                <li>Discuss choosing our executor</li>
                                <li>Special needs care research for Susan</li>
                            </ul>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3" className='card-icon'>
                                    <img className="card-image" src='assets/logos/treeIcon.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card-2-text-second title'>Your Plan Explained</h3>
                                    <p className='card-2-text-second'>Your estate plan and process guide visualized in a flowchart that will keep you and your closest advisors up to date. We are always available to discuss options and answer questions.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3" className='card-icon'>
                                    <img className="card-image" src='assets/logos/communication.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card-2-text-second title'>Communications Center</h3>
                                    <p className='card-2-text-second'>My contacts and important instructions.</p>
                                    <p><strong>Contacts <IonIcon icon={chevronForward}></IonIcon></strong></p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3" className='card-icon'>
                                    <img className="card-image" src='assets/logos/compass.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card-2-text-second title'>Resource Guide</h3>
                                    <p className='card-2-text-second'>Information, articles and expert advice on the building blocks of your estate plan.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Dashboard;
