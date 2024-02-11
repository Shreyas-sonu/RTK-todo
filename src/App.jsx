import { Provider } from "react-redux";
import "./index.css";
import { store } from "./app/store";
import Home from "./Home";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
