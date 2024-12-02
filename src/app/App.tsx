import { Provider } from "react-redux";
import store from "@reducers/store";
import Router from "@app/Router";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
