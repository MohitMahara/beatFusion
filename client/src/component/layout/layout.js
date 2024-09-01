import React from "react";
import {Helmet} from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from 'react-hot-toast';


function Layout({ children, title, description, keywords, author }) {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
    </Helmet>
      <Header />
      <main style={{minHeight: "70vh"}}>
        <Toaster position="top-center" />
       
        {children}
      </main>
      <Footer />
    </>
  );
}


Layout.defaultProps = {
  title: "BeatFusion-feel the beat",
  description: "Music website",
  keywords: "MERN, React, HTML, CSS, JavaScript, Node ",
  author: "Mohit Mahara",
};


export default Layout;
