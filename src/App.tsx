import Character from "./features/Characters";

function App() {
  return (
    <div className="App">
      <img src="logo.svg" alt="rick-and-morty" />
      <Character  status={"dead"} />
    </div>
  );
}

export default App;
