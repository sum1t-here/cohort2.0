import React, { useMemo, useState } from 'react';

import {
  RecoilRoot,
  // useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
      <EventCountRenderer />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}

function EventCountRenderer() {
  // const count = useRecoilValue(countAtom);

  // normal
  // const isEven = count % 2 == 0;

  // derived state hooks
  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);

  // recoil
  const isEven = useRecoilValue(evenSelector);

  return <>{isEven ? 'It is Even' : 'It is odd'} </>;
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom);
  // setCount(count + 1) -> directly update the current value of the count (it re-renders)
  // setCount(c => c + 1)
  // setCount(function(){
  // return c + 1
  // })

  console.log('Button re-rendered');
  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
