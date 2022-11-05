import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      
        Click me
      </button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>click</button>
      <br></br>
      <button onClick={() => setCount(0 )}>Reset</button>
    </div>
  );
}

export default Example;