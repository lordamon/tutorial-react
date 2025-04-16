import { useRef, useState } from "react";

export const RefVsState = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  console.log("🔄 COMPONENT Ref VS State RENDERED");

  const incrementState = () => {
    setStateCount((prev) => prev + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log("✅ refCount incremented:", refCount.current);
  };

  return (
    <div>
      <h2 className="text-3xl">useState vs useRef</h2>

      <div>
        <strong>State Count:</strong> {stateCount}
        <br />
        <button onClick={incrementState}>useState</button>
      </div>

      <div>
        <strong>Ref Count:</strong> {refCount.current}
        <br />
        <button onClick={incrementRef}>useRef</button>
      </div>

      <p>Look at the console: when you click the useState button, the component is re-rendered. With useRef it doesn't.</p>
    </div>
  );
};
