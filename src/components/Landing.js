import React , {useState , useEffect} from 'react';

//API
import {getCoin} from "../services/api"

//Styles
import styles from "../styles/Landing.module.css"

//Loading 
import Loading from './Loading.js';

//Components
import Coin from './Coin';


const Landing = () => {
    const[coins,setCoins]=useState([]);
    const [search,setSearch]=useState("");

    useEffect (()=>{
        const fetchAPI=async ()=>{
        const data = await getCoin();
            setCoins(data);
        }
        fetchAPI()
    },[])

     const searchHandler=(event)=>{
        setSearch(event.target.value);
     }

     const searchedCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className={styles.mainContainer}>
            <input className={styles.searchBox} type='text' placeholder='search' value={search} onChange={searchHandler}/>
            <div className={styles.coinsContainer}>{
                coins.length ?
                    <div className={styles.container}>
                        {searchedCoins.length ?
                            searchedCoins.map(coin=><Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                            />)
                            :<span className={styles.searchError}>"nothing found... search again"</span>
                        }
                    </div>:
                    <Loading/>
            }
            </div>
        </div>

    );
};

export default Landing;