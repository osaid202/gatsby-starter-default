import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
 -->    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>index</title>
</head>

<body>
    <div id="container">
        <header id="header">
            <h1>Los Pollos Hermanos fried chicken</h1>
            <img src="images/LPH_logo.jpg" alt="logo">
            <nav id="mainNav">
                <a href="index.html">HOME</a>
                <a href="products.html">PRODUCTS</a>
                <a href="contact.html">CONTACT</a>
            </nav>
        </header>
        
        
        <h2>Who are we?</h2>
        <p>Los Pollos Hermanos is a fast-food restaurant chain that specializes in fried chicken, operating across the southwestern United States. The name, pronounced [los ˈpo.ʝos eɾˈma.nos], is ungrammatical Spanish for "The Chicken Brothers." Founded by Gustavo Fring and Max Arciniega, the restaurant chain had fourteen locations throughout the southwest.</p>
        
        <h3>HOT DEAL</h3>
        <p>12Pcs chicken bucket<br>Your choice of side<br>Large fries<br>For only $9.99!</p>

        <footer id="footer">
            <nav id="footerNav">
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="#">RSS</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Site Map</a>            
                <a href="contact.html">Contact</a>
                <p>Copyright &copy; 2011 <a href="#">Los Pollos Hermanos</a></p>
                <p id="address">99 Crystal street, Albuquerque, NY 10024-5192 <a id="map" href="#">Map</a></p>
            </nav>
        </footer>
    </div>
</body>

</html>

export default IndexPage
