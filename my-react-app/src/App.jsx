import LoginForm from "./components/form/Form";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
