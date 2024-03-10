import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
return (
<>
`<Count count={count} />`
`<Buttons count={count} setCount={setCount} />`
</>
);
}

function Count({ count }) {
return <> {count} </>;
}

function Buttons({ count, setCount }) {
return (
<>
`<button onClick={() => { setCount(count + 1); }} > Increase </button>`

`<button onClick={() => {setCount(count - 1); }}>Decrease </button>`
</>

);
}

export default App;

## Make the `<Buttons>` component inside the `<Count>` component

function Count({ count }) {
return (<>
{count}
`<Buttons count={count} setCount={setCount} />`
</>);
}

we have to pass the `setCount` as props to the Count component so that it can pass to its child component

function Count({ count, setCount }) {
return (<>
{count}
<Buttons count={count} setCount={setCount} />
</>);
}

## This is prop drilling

- Prop drilling is a great way to explicitly pipe data through UI tree of the component

# CONTEXT API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
