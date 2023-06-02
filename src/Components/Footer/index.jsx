import './footer.scss'
// import { Outlet } from 'react-router-dom'

function Footer() {
  const today = new Date();
  return (
        <footer className='footer-container'>
        <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
  )
}

export default Footer