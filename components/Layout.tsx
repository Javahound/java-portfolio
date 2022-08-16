import Navbar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div >
        <main >
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout