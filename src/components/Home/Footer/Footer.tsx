import { Link } from 'react-router-dom';

import logo from '@/assets/home/svg/client/Logo.svg';
import instagram from '@/assets/home/svg/client/ri_instagram-fill.svg';
import facebook from '@/assets/home/svg/client/bi_facebook.svg';
import linkedin from '@/assets/home/svg/client/cib_linkedin.svg';
import Container from '@/hoc/Container/Container';

const email = 'menuproject24@gmail.com';
const instagramLink = '';
const facebookLink = '';
const linkedinLink = '';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradientToTop pt-5 pb-[1.81rem] sm:pt-10 sm:pb-9">
      <Container padding="px-0 sm:px-11 xl:px-36">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-end">
          <a href="#Header">
            <img src={logo} alt="logo" className="h-16 pb-[1.19rem] sm:pb-0 " />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-white font-raleway font-normal pb-[1.875rem] underline sm:pb-0 "
          >
            {email}
          </a>
          <div className="flex justify-between gap-[1.625rem] ">
            <Link to={instagramLink}>
              <img src={instagram} alt="instagram" className={'h-[1.625rem]'} />
            </Link>
            <Link to={facebookLink}>
              <img src={facebook} alt="facebook" className="h-[1.625rem]" />{' '}
            </Link>
            <Link to={linkedinLink}>
              <img src={linkedin} alt="linkedin" className="h-[1.625rem]" />{' '}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
