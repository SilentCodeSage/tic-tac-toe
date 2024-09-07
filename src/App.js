import { Provider } from "react-redux";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Reset from "./components/Reset";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-green-200 h-screen flex flex-col items-center justify-center">
        <Header />
        <Board />
        <Reset />
      </div>
    </Provider>
  );
}

export default App;
