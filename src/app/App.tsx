import { ReactKeycloakProvider } from "@react-keycloak/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import keycloak, { initOptions, onKeycloakEvent } from "./keycloak";
import Router from "./Router";
import store from "./store";
// Tanstack : QueryClient 인스턴스 생성
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        onEvent={onKeycloakEvent}
      >
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ReactKeycloakProvider>
    </Provider>
  );
};
export default App;
