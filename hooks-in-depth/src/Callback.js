import { useState, useEffect, useCallback, memo } from "react";

// memo will check the props on every run and will not rerender if they are the same.
// This makes it to where fib could be some very large number that take alot of time to compute and it wont need to rerender every time
// something in the parent changes (which generally causes its children to rerender), instead it will only run when the props change
// Ex: Every time `time` is updated (which is a parent of ExpensiveComputationComponent), ExpensiveComputationComponent doesn't necessarily
// need to rerender and can use the same result it used last time because the props are the same
const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        // useCallback ensures the exact same function is passed into ExpensiveComputationComponent so that
        // ExpensiveComputationComponent doesnt think that fibonacci has changed which would cause unnecessary rerender cycles
        compute={useCallback(fibonacci, [])}
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
