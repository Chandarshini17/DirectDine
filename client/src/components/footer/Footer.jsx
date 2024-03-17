import React from "react";
import classes from "./footer.module.css";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.col}>
          <h2 className={classes.title}>Working Hours</h2>
          <ul className={classes.list}>
            <li>Monday - Friday: 08:00 AM - 10:00 PM</li>
            <li>Saturday: 08:00 AM - 08:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <p className={classes.description}>
            Subscribe to our newsletter and stay updated with our latest offers and promotions.
          </p>
          <div className={classes.subscribe}>
            <input type="email" placeholder="Enter your email" className={classes.emailInput} />
            <button className={classes.subscribeButton}>Subscribe</button>
          </div>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Connect with Us</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
      <div className={classes.attribution}>
        <h3>Special Thanks to IconScout for the Illustrations:</h3>
        <div className={classes.illustrations}>
          <div><a href="https://iconscout.com/illustrations/man" target="_blank" rel="noopener noreferrer">Man having his meal Illustration</a></div>
          <div><a href="https://iconscout.com/illustrations/male" target="_blank" rel="noopener noreferrer">Male delivery guy riding scooter Illustration</a></div>
          <div><a href="https://iconscout.com/illustrations/delivery-location" target="_blank" rel="noopener noreferrer">Delivery Location Illustration</a></div>
          <div><a href="https://iconscout.com/illustrations/deliveryman-with-pizza" target="_blank" rel="noopener noreferrer">Deliveryman with pizza Illustration</a></div>
          <div><a href="https://iconscout.com/illustrations/get-newsletter-updates" target="_blank" rel="noopener noreferrer">Get newsletter updates Illustration</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

