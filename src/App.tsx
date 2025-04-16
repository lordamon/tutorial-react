import { Counter } from "./components/Counter";
import MyImage from "./components/MyImage";
import { RandomUser } from "./components/RandomUser";
import { RefVsState } from "./components/RefVsState";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <MyImage />

      <WelcomeMessage text={"Titolo della pagina!"} isHeader />
      <WelcomeMessage text={"testo di prova testo di prova testo di prova testo di prova testo di prova"} isHeader={false} />
      <WelcomeMessage text={"testo senza campo isHeader con fallback sul valore di default"} />
      <hr />
      <Counter />
      <Counter start={10} />
      <Counter start={100} increment={5} />
      <hr />
      <RefVsState />
      <hr />
      <RandomUser />
      <hr />
    </>
  );
}

export default App;
