import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet'
import { Toaster } from 'react-hot-toast';


export const Layout = ({children,title,description,keyword,author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keyword} />
                    <meta name="author" content={author} />  
                <title>{title}</title>
                
            </Helmet>
       <Header/>
  <main style={{minHeight:'80vh'}}>
  <Toaster />
    {children}</main>
      
       <Footer/>

    </div>
  )
}
Layout.defaultProps={
  title:"Ecommerce app",
  description:"mearn stack project",
  keywords:"mern,react,node,mongodb ",
  author:"Yaduvesh",
}

export default Layout;