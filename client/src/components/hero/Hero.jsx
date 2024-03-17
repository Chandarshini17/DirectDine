import React from 'react';
import classes from './hero.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import manEating from '../../assets/man-having-his-meal.svg';

const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Craving Delicious Food?</h2>
          <p className={classes.desc}>
            Welcome to our food delivery app, where culinary delights meet convenience! Whether you're craving a hearty burger, a fresh salad, or a comforting bowl of pasta, our diverse menu has something to satisfy every palate.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order Now</button>
            <button className={classes.buttonSee}><a href="#foods">See Menu <AiOutlineArrowDown /></a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="Man enjoying his meal" className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
