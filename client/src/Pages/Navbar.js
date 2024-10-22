
function Navbar({ onSearch }) {

  return (
    <nav className="navbar" style={{backgroundColor:"#e9ecef"}}>
      <div className="container-fluid">
      {/* link to the home page from any other page */}
      <a type="button" href="/" className="btn  btn-lg">MobileInsight</a>
      <a type="button" href="/About" className="btn">About</a>
       <a type="button" href="/signup" className="btn">Sign Up</a>

      </div>
    </nav>
  );
}

export default Navbar;
