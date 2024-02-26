import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2 className="comcept-text">Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
