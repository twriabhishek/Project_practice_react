import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setlength] = useState(10);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);
  // const passwordGenerator= useCallback(fn, dependencyArray);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numb = "0123456789";
    let char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    if (numberAllowed) {
      string += numb;
    }
    if (charAllowed) {
      string += char;
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  useEffect(passwordGenerator, [
    length,
    numberAllowed,
    charAllowed,
    setpassword,
  ]);

  const copyPassToClip = useCallback(() => {
    // window.navigator.clipboard.writeText(password);
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  console.log(length, numberAllowed, charAllowed);
  return (
    <div className="main-pass-container">
      <div className="inner-pass-container">
        <h1>Password Generator</h1>
        <div>
          <main className="upper-main">
            <input
              ref={passwordRef}
              type="text"
              readOnly
              value={password}
            ></input>
            <button type="button" onClick={copyPassToClip}>
              Copy
            </button>
          </main>
          <main className="lower-main">
            <div>
              <input
                type="range"
                min="6"
                max="30"
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label htmlFor="length">length ({length})</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Number</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Char</label>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
