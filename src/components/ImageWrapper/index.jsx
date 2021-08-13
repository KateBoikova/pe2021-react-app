import React from 'react';
import styles from './ImageWrapper.module.scss';
import PropTypes from 'prop-types';

function ImageWrapper (props) {
  const { children, width, height, ...restProps } = props;
  const inlineStyle = {
    width: width,
    height: height,
  };
  return (
    <div style={inlineStyle} className={styles.imageContainer} {...restProps}>
      {children}
    </div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ImageWrapper;
