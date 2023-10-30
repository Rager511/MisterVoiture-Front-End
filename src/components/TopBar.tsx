import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { HiLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

interface Props {
  title: string;
};

const TopBar: React.FC<Props> = ({ title }) => {
  const [isAtTop, setIsAtTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elementStyle = isAtTop ? {} : { backdropFilter: "blur(30px)", backgroundColor: "rgba(255, 255, 255, 0.75)" };

  return (
    <nav style={{ zIndex: 99999, width: "calc(100vw - 23.5rem)", ...elementStyle }} className="flex justify-between drop-shadow-lg fixed p-5 rounded-2xl border-gray-200">
      <div className='flex items-center text-grey-700 text-2xl font-medium'>
        {title}
      </div>
      <div className='flex space-x-3'>
        <Link to={routes.notifications}>
          <IoIosNotifications size={27} color={"dimgray"} />
        </Link>
        <Link to={routes.profile}>
          <BsFillPersonFill size={27} color={"dimgray"} />
        </Link>
        <Link to={routes.signIn}>
          <HiLogout size={27} color={"dimgray"} />
        </Link>
      </div>
    </nav>
  );

};

export default TopBar;

