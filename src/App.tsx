import { Route, Routes } from "react-router-dom";
import PageTemplate from "./layout/pagetemplate";
import Overview from "./pages/overview";
import Tokens from "./pages/tokens";
import Pools from "./pages/pools";
import Portfolio from "./pages/portfolio";
import Settings from "./pages/settings";
import TokenDetails from "./pages/tokendetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<Overview />} />
        <Route path="tokens" element={<Tokens />}/>
        <Route path="tokens/details" element={<TokenDetails />} />
        <Route path="pools" element={<Pools />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="settings" element={<Settings />}/>
      </Route>
    </Routes>
  )
}
