import Head from 'next/head';
import Header from '../components/Header/Header.js';
import styles from '../styles/sass/Home.module.scss';


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/>
      </div>
    </div>
    
  )
}

export default Home;
