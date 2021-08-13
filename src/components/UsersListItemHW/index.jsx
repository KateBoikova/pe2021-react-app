import React from 'react';
import styles from '../UsersListHW/UsersListHW.module.scss';

function UsersListItemHW (props) {
  const {
    id,
    firstName,
    lastName,
    age,
    imgSrc,
    isSelected,
    selectUser,
    deleteUser,
  } = props;

  return (
    <li className={isSelected ? styles.isSelected : ''}>
      <div className={styles.itemContainer} onClick={selectUser}>
        <div className={styles.infoContainer}>
          <img src={imgSrc} alt={firstName} />
          <div className={styles.info}>
            <p>
              {lastName} {firstName}
            </p>
            <p>{age}</p>
          </div>
        </div>
      </div>
      <button onClick={deleteUser}>
        <svg
          style={{ width: 24 + 'px', height: 24 + 'px' }}
          viewBox='0 0 24 24'
        >
          <path
            fill='black'
            d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z'
          />
        </svg>
      </button>
    </li>
  );
}

export default UsersListItemHW;
