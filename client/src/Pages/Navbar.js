
function Navbar({ onSearch }) {

  const handleLogout = async () => {
    const response = await fetch("http://127.0.0.1:5555/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      // Handle successful logout (e.g., clear session info, redirect)
    } else {
      alert("Logout failed");
    }
  }

  return (
    <nav className="navbar" style={{backgroundColor:"#e9ecef"}}>
      <div className="container-fluid">
      {/* link to the home page from any other page */}
      <a type="button" href="/" className="btn  btn-lg">MobileInsight</a>
      <a type="button" href="/About" className="btn">About</a>
      <a type="button" href="/Login" className="btn">Log-in</a>
       <a type="button" href="/signup" className="btn">Sign Up</a>
      <button type="button" className="btn" onClick={handleLogout}>logout</button>

      </div>
    </nav>
  );
}

export default Navbar;
