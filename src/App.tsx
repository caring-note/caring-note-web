import { useState } from "react";
import Button from "./components/Button";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello tailwind!</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Button variant="primary" size="sm" icon="r-arrow" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="primary" size="md" icon="r-arrow" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="primary" size="lg" icon="r-arrow" onClick={() => {}} children={"테스트 버튼"} disabled />
      <Button variant="primary" size="xl" icon="r-arrow" onClick={() => {}} children={"테스트 버튼"} />

      <Button variant="secondary" size="sm" icon="search" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="secondary" size="md" icon="search" onClick={() => {}} children={"테스트 버튼"} disabled />
      <Button variant="secondary" size="lg" icon="search" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="secondary" size="xl" icon="search" onClick={() => {}} children={"테스트 버튼"} />
    </>
  );
}

export default App;
