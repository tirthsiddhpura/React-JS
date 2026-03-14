import React, { useState } from "react";

const Increase = () => {
  const [Number, setNumber] = useState(0);

  // Increase by 1
  function IncreaseNum() {
    setNumber(Number + 1);
  }

  // Decrease by 1 (0 se niche nahi jayega)
  function DecreaseNum() {
    if (Number > 0) {
      setNumber(Number - 1);
    }
  }

  // Increase by 5
  function JumpFive() {
    setNumber(Number + 5);
  }

  // Decrease by 5 (0 se niche nahi jayega)
  function DecreaseFive() {
    if (Number >= 5) {
      setNumber(Number - 5);
    } else {
      setNumber(0);
    }
  }

  // Reset
  function ResetNum() {
    setNumber(0);
  }

  return (
    <>
      <section>
        <h1 className="text-center text-5xl font-extrabold mt-10">
          UseState : Change Data
        </h1>

        <p className="text-center mt-5 font-bold">
          Increase And Decrease Number
        </p>

        <div className="w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>

        <div className="flex items-center justify-center mt-5 gap-6 flex-wrap">

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={IncreaseNum}
          >
            Increase
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={DecreaseNum}
          >
            Decrease
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={JumpFive}
          >
            +5
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={DecreaseFive}
          >
            -5
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={ResetNum}
          >
            Reset
          </button>

        </div>
      </section>
    </>
  );
};

export default Increase; 