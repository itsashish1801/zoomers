import Link from 'next/link';
import Container from './Container';
import Logo from '../assets/zoomers-dark.png';
import Image from 'next/image';
import { ButtonLink } from '../components/Button';

const Header = () => {
  return (
    <header className='py-10'>
      <Container>
        <nav className='relative z-50 text-sm'>
          <ul className='flex items-center justify-between'>
            <li>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Home</span>
                  <Image src={Logo} alt='Cerify logo' height={60} width={180} />
                </a>
              </Link>
            </li>
            <div className='flex space-x-5'>
              <li>
                <ButtonLink href={'/'} variant='outline' className=''>
                  Create account
                </ButtonLink>
              </li>
              <li>
                <ButtonLink href={'/'} className=''>
                  Sign in
                </ButtonLink>
              </li>
            </div>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
