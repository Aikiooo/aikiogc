import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidebar from './Sidebar';
import LatestNews from './LatestNews';
import CharacterList from './CharacterList';
import BannerHistory from './BannerHistory';
import GemsCalculation from './GemsCalculation';
import DamageCalculation from './DamageCalculation';
import DemonicBeasts from './DemonicBeasts';
import DemonKingBattle from './DemonKingBattle';

const Layout = () => {
  return (
    <><div className="app-container" >
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
    
    <div className="logo-container">
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div></>



  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LatestNews />} />
          <Route path="latest-news" element={<LatestNews />} />
          <Route path="character-list" element={<CharacterList />} />
          <Route path="banner-history" element={<BannerHistory />} />
          <Route path="tools/gems-calculation" element={<GemsCalculation />} />
          <Route path="tools/damage-calculation" element={<DamageCalculation />} />
          <Route path="guides/demonic-beasts" element={<DemonicBeasts />} />
          <Route path="guides/demon-king-battle" element={<DemonKingBattle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;