import React from 'react';
import styles from './../../../components/RoutingBase/RoutingBase.module.scss';

function NotFound (props) {
  const { history } = props;
  setTimeout(() => {
    history.push('/');
  }, 5000);
  return (
    <div className={styles.notFound}>
      <h2>404</h2>
      <p>Sorry, page not found...</p>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8ddXIs0ujCAyiwiDe3YOfqGCNIxPeYlRPMygDXYk_EDhGAmP_sqKaQMYo3qLRVfRJG4&usqp=CAU' />
    </div>
  );
}

export default NotFound;
