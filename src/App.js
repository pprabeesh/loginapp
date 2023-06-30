import { useState } from "react";
import "./App.css";
import "./config/firebase-config";
import socialMediaAuth from "./service/auth";
import { googleProvider } from "./config/authMethods";

function App() {
  const [res, setRes] = useState(null);
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    setRes(res);
  };
  return (
    <div className="App">
      {res ? (
        <p>Hi {res.displayName}</p>
      ) : (
        <button onClick={() => handleOnClick(googleProvider)}>Google</button>
      )}
    </div>
  );
}

export default App;
