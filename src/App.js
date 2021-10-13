import './App.css';
import { useTheme } from './theme/useTheme';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {

  const { themeLoaded, theme, getFonts, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [displayText, setDisplayText] = useState('0');
  
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    })
  }, []);

  const readInput = (keyId) => {
    console.log(`${keyId} is clicked.`);
  }

  const showResults = () => {
    console.log("the result is ...");
  }

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles />
        <div style={{fontFamily: selectedTheme.font}} className="container-main">
          <div className="container-display">
            <input type="text" readOnly value={displayText} className="input-display"/>
          </div>
          <div className="container-btn">
            <div className="sub-container-btn">
              <div className="btn-padding">
                <button className="btn-secondary" onClick={readInput('ac')}>
                  AC
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-secondary" onClick={readInput('plusMinus')}>
                  ±
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-secondary" onClick={readInput('percent')}>
                  %
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-accent" onClick={readInput('divide')}>
                  ÷
                </button>
              </div> 
            </div>
            <div className="sub-container-btn">
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('7')}>
                  7
                </button>
              </div> 
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('8')}>
                  8
                </button>
              </div> 
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('9')}>
                  9
                </button>
              </div> 
              <div className="btn-padding">
                <button className="btn-accent" onClick={readInput('multiply')}>
                  ×
                </button>
              </div> 
            </div>
            <div className="sub-container-btn">
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('4')}>
                  4
                </button>
              </div> 
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('5')}>
                  5
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('6')}>
                  6
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-accent" onClick={readInput('minus')}>
                  -
                </button>
              </div>
            </div>
            <div className="sub-container-btn">
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('1')}>
                  1
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('2')}>
                  2
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('3')}>
                  3
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-accent" onClick={readInput('plus')}>
                  +
                </button>
              </div>
            </div>
            <div className="sub-container-btn">
              <div className="btn-padding btn-zero">
                <button className="btn-tertiary" onClick={readInput('0')}>
                  0
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-tertiary" onClick={readInput('dot')}>
                  .
                </button>
              </div>
              <div className="btn-padding">
                <button className="btn-accent" onClick={readInput('equal')}>
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
