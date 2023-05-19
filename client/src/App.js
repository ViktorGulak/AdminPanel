import { Routes, Route, Navigate } from "react-router-dom";
import "./app.scss";
import "./index.css";

import PaymentVodokanal from "./pages/PaymentVodokanal.jsx";
import OnlineReceipt from "./pages/OnlineReceipt.jsx";
import Profile from "./pages/Profile.jsx";
import Mailings from "./pages/Mailings.jsx";
import Statistics from "./pages/Statistics.jsx";
import Users from "./pages/Users.jsx";
import Auth from "./pages/Auth.jsx";
import Advertisement from "./pages/Advertisement.jsx";

import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaymentVodokanal />} />
          <Route path="/onlinereceipt" element={<OnlineReceipt />} />
          <Route path="/adminpanel/profile/:id" element={<Profile />} />
          <Route path="/adminpanel/statistic" element={<Statistics />} />
          <Route path="/adminpanel/mailing" element={<Mailings />} />
          <Route path="/adminpanel/user" element={<Users />} />
          <Route path="/adminpanel/auth" element={<Auth />} />
          <Route
            path="/adminpanel"
            element={<Navigate to="/adminpanel/auth" replace />}
          />
          <Route path="/adminpanel/advertisement" element={<Advertisement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
