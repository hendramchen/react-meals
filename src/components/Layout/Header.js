import React, {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from './../../assets/meals.jpeg';

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImg} alt="React meals" />
    </div>
  </Fragment>
}

export default Header;