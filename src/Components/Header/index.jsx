import './header.scss';

function Header({ title }) {
  return (
    <main className='header-container'>
        <h1>{title}</h1>
    </main>
  )
}

export default Header