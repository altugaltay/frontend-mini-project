import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <div>
      <Header/>
      <div className="row">
        <Main/>
        <Basket/>
      </div>
    </div>
  );
}

export default App;
