import { useRef, useState } from "react";

export const RefVsState = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, forceRender] = useState(0); // solo per forzare il render
  let letCount = 0;

  //console.log("🔄 COMPONENT Ref VS State RENDERED");

  const incrementState = () => {
    setStateCount((prev) => prev + 1);
    letCount++;
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log("✅ refCount incremented:", refCount.current);
  };

  return (
    <div className="my-3">
      <h2 className="flex gap-3">
        <span className="text-3xl">useState vs useRef</span>
        <button className="btn" onClick={() => forceRender((prev) => prev + 1)}>
          Force Render
        </button>
      </h2>

      <div className="my-3">
        <strong>State Count:</strong> {stateCount}
        <br />
        <button className="btn-light" onClick={incrementState}>
          useState
        </button>
      </div>

      <div className="my-3">
        <strong>Ref Count:</strong> {refCount.current}
        <br />
        <button className="btn-light" onClick={incrementRef}>
          useRef
        </button>
      </div>

      <div className="my-3">
        <strong>Let Count:</strong> {letCount}
      </div>

      <p>Look at the console: when you click the useState button, the component is re-rendered. With useRef it doesn't.</p>
      <p>Use force render to trigger a rendering and watch refCount change</p>
      <p>NOTE: let count will never grow</p>
    </div>
  );
};
