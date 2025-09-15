import { Route, Routes } from "react-router-dom";
import PageTemplate from "./layout/pagetemplate";
import Overview from "./pages/overview";
import Tokens from "./pages/tokens";
import Pools from "./pages/pools";
import Portfolio from "./pages/portfolio";
import Settings from "./pages/settings";
import TokenDetails from "./pages/tokendetails";
import PoolDetails from "./pages/pooldetails";
import ConnectWallet from "./pages/connectwallet";
import { WalletProvider } from "./components/context/walletcontext";

export default function App() {
  return (
    <WalletProvider>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Overview />} />
          <Route path="tokens" element={<Tokens />}/>
          <Route path="tokens/details" element={<TokenDetails />} />
          <Route path="pools" element={<Pools />}/>
          <Route path="pools/details" element={<PoolDetails />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="settings" element={<Settings />}/>
          <Route path="/connect" element={<ConnectWallet />} />
        </Route>
      </Routes>
    </WalletProvider>
    
  )
}
