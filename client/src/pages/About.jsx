import { About, Delegates, Services, Team, Timeline } from '../components';
import ScrollToTop from 'react-scroll-to-top';
const AboutUs = () => {
  return (
    <section>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <About />
      <Services />
      <Timeline />
      <Team />
      <Delegates />
    </section>
  );
};
export default AboutUs;
