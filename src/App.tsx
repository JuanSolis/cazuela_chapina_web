import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./features/auth/components/PrivateRoute";
import SignIn from "./features/auth/pages/SignIn";
import AppLayout from "./features/dashboard/pages/layout/AppLayout";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AppLayout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
