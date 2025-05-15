import React, { useEffect, useRef, useState } from 'react';

const Otp = () => {
  const inputCount = 5;
  const [arr, setArr] = useState(new Array(inputCount).fill(""));
  const arrRef = useRef([]);
  const [isfill, setisfill] = useState(false);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newArr = [...arr];
    newArr[index] = value.slice(-1);
    setArr(newArr);

    if (value && index < inputCount - 1) {
      arrRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (arr[index] === "") {
        arrRef.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      arrRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight") {
      arrRef.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    arrRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const allFilled = arr.every(val => val !== "");
    setisfill(allFilled);
  }, [arr]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-center">Enter OTP</h1>

        <div className="flex justify-center gap-3">
          {arr.map((item, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-400 text-2xl sm:text-3xl text-center rounded-md focus:border-blue-500 outline-none transition duration-150"
              value={item}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(input) => (arrRef.current[index] = input)}
            />
          ))}
        </div>

        {isfill && (
          <button
            type="submit"
            className="w-40 h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition duration-200"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Otp;
