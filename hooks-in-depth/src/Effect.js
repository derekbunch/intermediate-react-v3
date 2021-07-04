import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(() => setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // });

  useEffect(() => {
    getPets();
  })

  async function getPets() {
    const obj = await fetch('https://pets-v2.dev-apis.com/pets');
    const json = await obj.json();
    console.log(json)
  }

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
