import AboutAPI from './components/AboutAPI';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import TechStack from './components/TechStack';
import styles from './page.module.scss';

export default function Home() {
   return (
      <div className={styles.page}>
         <HeroSection />
         <HowItWorks />
         <AboutAPI />
         <TechStack />
      </div>
   );
}
