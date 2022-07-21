import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chatbox } from 'ionicons/icons';
import { useParams } from 'react-router';
import Header from '../components/header';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonCard class="dashboard-card">
          <IonCardContent>
            <IonImg src="assets/logos/treeIcon.svg" className='tree-icon' />
            <div className='card-title'>Welcome to Nimbus Law</div>
            <div className='card-text'><span style={{ color: "#316094" }}>We provide your most important estate plan asset—confidence. </span><br /> Lets get started by answering a few questions to learn about your life, your wishes and needs.</div>
            <div className='start-btn'><IonButton>Let's Get Started</IonButton></div>
          </IonCardContent>
        </IonCard>
        <div className='blue-box'>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
