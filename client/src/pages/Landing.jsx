import { Hero, Statistics, Partners, Mission } from '../components';
import Testimonials from '../components/Testimonials';
import Home from './Home';
import ScrollToTop from 'react-scroll-to-top';

const Landing = () => {
  return (
    <section className='my-10 '>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <Hero />
      <Statistics />
      <Mission />
      <Partners />
      <Testimonials />
    </section>
  );
};
export default Landing;
