import { Provider } from "react-redux";
import "./App.css";
import FormEditor from "./components/form/FormEditor";
import { store } from "./redux/strore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FormEditor />
      </Provider>
    </div>
  );
}

export default App;
