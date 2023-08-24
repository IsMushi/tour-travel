
import Header from './header/header'
import Routing from '../router/Route'
import Footer from './footer/footer'

export default function Layout() {
  return (
    <>
    <Header />
    <div className=''>
      <Routing />
    </div>
    <Footer />
    </>
    
  )
}
