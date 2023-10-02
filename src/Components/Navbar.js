const Navbar = () => {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img src="assets/img/eagle.svg" />
        <div className="logo">MOHD ASHIF</div>
      </div>
      <div className="links">
        <ul>
          <li>Writing</li>
          <li>Speaking</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
