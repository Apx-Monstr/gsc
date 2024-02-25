import { useRouter } from 'next/router';
import Link from 'next/link';

const NavButton = ({ text, route }) => {
  const { asPath } = useRouter();
  const isActive = asPath === route;

  return (
    <Link href={route}>
      <div className={`text-2xl px-8 py-4 relative cursor-pointer hover:text-primary`}>
        <div className="absolute left-0 bottom-2.5 h-1.5 w-full flex justify-center">
          {/* <div className="bg-purple-500 w-2 rounded-full h-full"></div> */}
        </div>
        {text}
      </div>
    </Link>
  );
}

const NavBar = () => {
  const navs = [
    {
      'name': 'Recents',
      'route': '/recents'
    },
    {
      'name': 'Map',
      'route': '/dashboard'
    },
    {
      'name': 'Profile',
      'route': '/user-profile'
    },
  ];

  return (
    <div className="h-28 w-full p-4 fixed bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-200/50">
      <div className="flex justify-center rounded">
        <div className="rounded-xl bg-white border border-primary flex">
          {navs.map((nav) => (
            <NavButton key={nav.route} text={nav.name} route={nav.route} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
