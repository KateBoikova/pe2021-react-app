import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../pages/FormikHW/FormikHW.module.scss';

function FormikHWHeader () {
  const to = useLocation().pathname === '/' ? '/login' : '/';
  const linkText = useLocation().pathname === '/' ? 'Log in' : 'Sign up';
  return (
    <div>
      <header className={styles.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' />

        <button>
          <Link to={to}>{linkText}</Link>
        </button>
      </header>
    </div>
  );
}

export default FormikHWHeader;
