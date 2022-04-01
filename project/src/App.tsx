import { useContext } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

//services
import { store } from "./services/redux/store";
import { UserContext } from "./services/contexts";

//pages
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";

//styles
import { GlobalStyle } from "./styles/global";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  const RequireAuth = () => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  const HomePage = () => (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
