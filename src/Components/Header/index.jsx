import './header.scss';

// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return (
    <main className='header-container'>
        <h1>{title}</h1>
        <p>header container</p>
    </main>
  )
}

export default Header