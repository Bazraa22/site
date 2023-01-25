import styles from '../styles/Home.module.css';

import Ff from '../zai/Ff';
import Dood from '../zai/Dood';
import Gol from '../zai/Gol';

import Proj from '../zai/Proj';

import Header from '../components/Header';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.tom}>
          Elias is a <span style={{ color: '#c778dd' }}>web designer</span> and{' '}
          <span style={{ color: '#c778dd' }}>front-end developer</span>
        </h1>
        <h2 className={styles.dund}>
          He crafts responsive websites where technologies meet creativity
        </h2>
        <div className={styles.zai}>
          <Ff />
          <Dood />

          <Gol />
        </div>
      </main>
      <aside className={styles.aside}>
        <div className={styles.gg}>
          <Proj />
          <h2>View all ~~></h2>
        </div>
      </aside>
    </div>
  );
}

export default Home;
