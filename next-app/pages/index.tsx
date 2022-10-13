import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <IonApp>
          <IonTabs>
            <IonRouterOutlet />
            <IonTabBar slot='bottom'>
              <IonTabButton tab='tab1' href='/tab1'>
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab='tab2' href='/tab2'>
                <IonIcon icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab='tab3' href='/tab3'>
                <IonIcon icon={square} />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonApp>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;