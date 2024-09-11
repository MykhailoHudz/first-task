import Layout from "./components/Layout/Layout.js";
import HomePage from "./pages/HomePage/HomePage.js";
import Page from "./pages/Page/Page.js";
import { Navigate, Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/page" element={<Page />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

