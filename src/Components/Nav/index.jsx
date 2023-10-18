// eslint-disable-next-line react/prop-types
import { Link, Outlet } from 'react-router-dom';
// import Header from '../Header';
import './nav.scss'

// eslint-disable-next-line react/prop-types
function Nav({ search, setSearch }) {
  return (
    <>
      {/* <Header title="Note Making"/>
       */}
      <nav className="nav-container">
      <main className='logo-container'>
        <h1>Note Making</h1>
      </main>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">New Note</Link></li>
      </ul>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Your Note"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
    <Outlet />
    </>
  );
}

export default Nav;
