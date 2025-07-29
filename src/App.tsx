import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./features/auth/components/PrivateRoute";
import SignIn from "./features/auth/pages/SignIn";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./features/dashboard/pages/Dashboard";
import ChatBot from "./features/dashboard/pages/ChatBot";
import ChatPage from "./features/dashboard/pages/ChatPage/ChatPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/chatbot"
              element={
                <PrivateRoute>
                  <ChatBot />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<SignIn />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
