import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"> Enogheghase</span>
        <Outlet />
        <span className="tags bottom-tags">
          enogheghase
          <br />
          <span className="bottom-tag-html">marley</span>
        </span>
      </div>
    </div>
  );
}

export default Layout
