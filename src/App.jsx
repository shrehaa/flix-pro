import Body from "./components/Body/body";
import { Provider } from "react-redux";
import appStore from "./utils/store";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
