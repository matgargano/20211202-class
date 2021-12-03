import { useState, useEffect } from 'react';

function UseEffectExample() {
  const [valid, setValid] = useState(false);
  const [firstName, setFirstName] = useState('see');

  function handleType(e) {
    setFirstName(e.target.value);
  }

  useEffect(function () {
    console.log('loaded');
  }, []);

  //   useEffect(
  //     function () {
  //       //   let isFirstNameValid = true;
  //       //   if (firstName.length <= 2) {
  //       //     isFirstNameValid = false;
  //       //   }
  //       //   setValid(isFirstNameValid);

  //       setValid(firstName.length > 2);
  //     },
  //     [firstName]
  //   );

  //   useEffect(
  //     function () {
  //       setValid(firstName.length > 2);
  //     },
  //     [firstName]
  //   );
  useEffect(() => setValid(firstName.length > 2), [firstName]);
  //   useEffect(() => {
  //     return setValid(firstName.length > 2);
  //   }, [firstName]);

  return (
    <div>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          style={{
            backgroundColor: valid ? 'transparent' : 'red',
            borderColor: valid ? 'transparent' : 'blue',
            borderWidth: '3px',
            borderStyle: 'solid',
          }}
          type="text"
          id="first-name"
          value={firstName}
          onChange={handleType}
        />
        {!valid && <p>Invalid...</p>}
      </div>
    </div>
  );
}

export default UseEffectExample;
