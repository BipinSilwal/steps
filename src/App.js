import { useState } from 'react';
import Button from './Button';

const App = () => {
  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

  const [steps, setSteps] = useState(1);

  function handlePrevious() {
    if (steps > 1) setSteps((s) => s - 1);
  }

  function handleNext() {
    if (steps < 3) setSteps((s) => s + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={steps >= 1 ? 'active' : ''}>1</div>
          <div className={steps >= 2 ? 'active' : ''}>2</div>
          <div className={steps >= 3 ? 'active' : ''}>3</div>
        </div>
        <p className="message">{`steps ${steps}: ${messages[steps - 1]}`}</p>
        <div className="buttons">
          <Button
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            color="green"
          />
        </div>
      </div>
    </>
  );
};

export default App;
