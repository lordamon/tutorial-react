import { Counter } from "./components/Counter";
import { RandomUser } from "./components/RandomUser";
import { RefVsState } from "./components/RefVsState";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <div className="text-center">
        <img className="w-[200px] block m-auto" src="/cat.jpg" alt="Cat" />
        <p>Cat image (public folder)</p>
      </div>

      <WelcomeMessage text={"Titolo della pagina!"} isHeader />
      <WelcomeMessage text={"testo di prova testo di prova testo di prova testo di prova testo di prova"} isHeader={false} />
      <WelcomeMessage text={"testo senza campo isHeader con fallback sul valore di default"} />
      <hr />
      <Counter />
      <Counter start={10} />
      <Counter start={100} increment={5} />
      <hr />
      <RandomUser />
      <hr />
      <RefVsState />
    </>
  );
}

export default App;
