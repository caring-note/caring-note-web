import { useState } from "react";
import Button from "./components/Button";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Badge from "./components/Badge";
import Tooltip from "./components/Tooltip";

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
      <Button variant="primary" size="sm" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="primary" size="md" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="primary" size="lg" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} disabled />
      <Button variant="primary" size="xl" icon="rightArrow" onClick={() => {}} children={"테스트 버튼"} />

      <Button variant="secondary" size="sm" icon="search" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="secondary" size="md" icon="search" onClick={() => {}} children={"테스트 버튼"} disabled />
      <Button variant="secondary" size="lg" icon="search" onClick={() => {}} children={"테스트 버튼"} />
      <Button variant="secondary" size="xl" icon="search" onClick={() => {}} children={"테스트 버튼"} />

      <Badge variant="primary" size="sm" type="tint" />
      <Badge variant="primary" size="md" type="tint" />
      <Badge variant="primary" size="lg" type="tint" />
      <Badge variant="primary" size="xl" type="tint" />
      <Badge variant="primary" size="sm" type="outline" />
      <Badge variant="primary" size="md" type="outline" />
      <Badge variant="primary" size="lg" type="outline" />
      <Badge variant="primary" size="xl" type="outline" />

      <Badge variant="error" size="sm" type="tint" />
      <Badge variant="error" size="md" type="tint" />
      <Badge variant="error" size="lg" type="tint" />
      <Badge variant="error" size="xl" type="tint" />
      <Badge variant="error" size="sm" type="outline" />
      <Badge variant="error" size="md" type="outline" />
      <Badge variant="error" size="lg" type="outline" />
      <Badge variant="error" size="xl" type="outline" />

      <Tooltip id="test-id" text="툴팁 테스트 호버" />
      <Tooltip id="test-id-2" text="툴팁 테스트 클릭" eventType="click" />
    </>
  );
}

export default App;
