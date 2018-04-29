import MyLink from './Link';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        {renderLogo()}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
};

const renderLogo = () => {
  return (
    <Link prefetch href="/">
      <a>
        <img src="../../static/favicon.ico" alt="Logo" />
      </a>
    </Link>
  );
};

const renderLinks = () => {
  return (
    <div>
      <MyLink prefetch href="/" activeClassName="active">
        <a>Home</a>
      </MyLink>
      <MyLink href="/about" activeClassName="active">
        <a>About</a>
      </MyLink>
    </div>
  );
};

export default Navbar;
