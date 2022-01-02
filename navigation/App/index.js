import React from "react";
import { AuthContext } from "./context";
import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";

const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: (currentUser) => {
        setLoggedIn(true);
        setCurrentUser(currentUser);
      },
      getCurrentUser: currentUser,
      signOut: () => {
        setLoggedIn(false);
        setCurrentUser(null);
      },
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={authContext}>
        {!isLoggedIn ? (
          <LoginScreen />
        ) : (
          <MainScreen/>
        )}
    </AuthContext.Provider>
  );
};

export default App;
