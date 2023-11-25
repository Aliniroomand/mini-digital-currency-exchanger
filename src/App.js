//images
import wallet from './images/wallet (1).png'
//Components
import Landing from './components/Landing';
import FloatedLogos from './components/FloatedLogos';
//styles

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Landing />
      <img className={styles.main_coin_bg} src={wallet} alt='BGcoin'/>
      <FloatedLogos/>
    </div>
  );
}

export default App;
