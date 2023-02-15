import AuthContextProvider from "./shared/context/AuthContext";
import RouterComponent from "./shared/RouterComponent";

function App() {
  return (
    <AuthContextProvider>
      <RouterComponent />
    </AuthContextProvider>
  );
}

export default App;
