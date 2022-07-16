import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox, checkmark, checkmarkCircle, chevronForward } from 'ionicons/icons';
import { useParams } from 'react-router';
import './dashboard.css';

const Dashboard: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

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
                <IonCard style={{ marginTop: "85px" }}>
                    <IonCardHeader>
                        <IonRow class='header-row'>
                            <IonCol size="5"><span className='estate'>Your Estate Plan</span></IonCol>
                            <IonCol size="5"><span className='session'>last session - 10.24.22</span></IonCol>
                            <IonCol size="2"><span className='finished'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon>finished</span></IonCol>
                        </IonRow>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol><span className='card-body'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon>Revocable Living Trust</span></IonCol>
                                <IonCol><span className='card-body'>Power of Attorney</span></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><span className='card-body'>Pour Over Will</span></IonCol>
                                <IonCol><span className='card-body'>Guardianship</span></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol><span className='card-body'><IonIcon style={{ color: '#7ad855', fontSize: '18px' }} icon={checkmarkCircle}></IonIcon>Medical Directive</span></IonCol>
                                <IonCol><span className='card-body'>Funding Guidance</span></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="2">
                                    <img className="card-image" src='assets/logos/planVault.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card2-text title'>Your PlanVault</h3>
                                    <p className='card2-text'>Nimbus PlanVault is a digital, secured safebox for your Estate Plan documents. Your trusted executors and beneficiaries can trust your latest wishes are here.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <div className='align-center'>
                            <IonIcon style={{ color: '#7ad855', fontSize: '30px' }} icon={checkmarkCircle}></IonIcon><span className='header'>Your To Do List</span>
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
                                <IonCol size="2">
                                    <img className="card-image" src='assets/logos/treeIcon.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card2-text title'>Your Plan Explained</h3>
                                    <p className='card2-text'>Your estate plan and process guide visualized in a flowchart that will keep you and your closest advisors up to date. We are always available to discuss options and answer questions.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="2">
                                    <img className="card-image" src='assets/logos/communication.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card2-text title'>Communications Center</h3>
                                    <p className='card2-text'>My contacts and important instructions.</p>
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
                                <IonCol size="2">
                                    <img className="card-image" src='assets/logos/compass.svg' />
                                </IonCol>
                                <IonCol>
                                    <h3 className='card2-text title'>Resource Guide</h3>
                                    <p className='card2-text'>Information, articles and expert advice on the building blocks of your estate plan.</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter >
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

export default Dashboard;
