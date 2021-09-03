import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import CONSTANTS from '../../constants';
import { ThemeContext } from '../../contexts';

const calcValue = v => {
  let i = 1;
  for (let j = 1; (j = 400000); j++) return v ** 3;
};

function CounterWithTheme () {
  const [theme, setTheme] = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  // const logCount = () => {
  //   console.log(`count=`, count);
  // };

  const logCount = useCallback(() => {
    console.log(`count=`, count);
  }, [count]);

  // useEffect(() => {
  //   console.log('function logCount has been created :>>');
  // });

  const themeSwitcher = useCallback(() => {
    setTheme(theme =>
      theme === CONSTANTS.THEMES.DARK
        ? CONSTANTS.THEMES.LIGHT
        : CONSTANTS.THEMES.DARK
    );
  }, []);

  // const themeSwitcher = () => {};

  const changeCount = useCallback(({ target: { value } }) => {
    setCount(Number(value));
  }, []);

  const styleMap = {
    [CONSTANTS.THEMES.LIGHT]: {
      color: 'black',
      backgroundColor: 'white',
      height: '100vh',
    },
    [CONSTANTS.THEMES.DARK]: {
      color: 'white',
      backgroundColor: 'black',
      height: '100vh',
    },
  };

  // const changeCount = ({ target: { value } }) => {
  //   setCount(Number(value));
  // };
  const calculatedValue = useMemo(() => calcValue(count), [count]);

  return (
    <div style={styleMap[theme]}>
      <button onClick={themeSwitcher}>Switch theme</button>
      <input type='number' value={count} onChange={changeCount} />
      <button onClick={logCount}>Log Count</button>
      <div>{calculatedValue}</div>
    </div>
  );
}

export default CounterWithTheme;
