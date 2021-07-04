import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    // Cleanup function
    return () => clearTimeout(timer);
  });

  // useEffect(() => {
  //   getPets();
  // }, [])

  //! How you would handle api call with use effect
  // async function getPets() {
  //   const obj = await fetch('https://pets-v2.dev-apis.com/pets');
  //   const json = await obj.json();
  //   // setPets(json)
  //   console.log(json)
  // }

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
