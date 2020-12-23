import Head from 'next/head'
import Navi from './Navi'
import Footer from './Footer'


const Layout = ({children , title = "e-Shop"}) => {
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            
            <header>
                <Navi/>
            </header>

            {children}

            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Layout;