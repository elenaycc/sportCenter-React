// NavLinks component

const NavLinks = () => (
  <ul className="navbar-nav me-3">
    {["Home", "Classes", "Trainer", "Review", "Contact"].map((item) => (
      <li className="nav-item" key={item}>
        <a className="nav-link text-white fw-semibold" href={`#${item.toLowerCase()}`}>
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinks;
