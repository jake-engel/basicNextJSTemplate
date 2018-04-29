import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
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
      <a className="brand-logo">
        <img src="../../static/favicon.ico" alt="Logo" />
      </a>
    </Link>
  );
};

const renderLinks = () => {
  return (
    <div>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
    </div>
  );
};

export default Navbar;

// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link prefetch href="/">
//           <a>Home</a>
//         </Link>
//       </li>
//       <ul>
//         {links.map(({ key, href, label }) => (
//           <li key={key}>
//             <Link href={href}>
//               <a>{label}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </ul>
//   </nav>
// );
