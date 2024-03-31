import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
// import logo from '../assets/images/sagilogo1.png';

const Logo = () => {
  return (
    <NavLink to='/' className='flex  text-3xl items-center'>
      <img
        src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1711892220/sagiLogo_p8gsbw.svg'
        alt='logo'
      />
    </NavLink>
  );
};
export default Logo;
