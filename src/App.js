import Home from "./components/Home";
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'
function App() {
  return (
    <>
      <Home />
      <SpeedInsights />
    </>
  );
}

export default App;
