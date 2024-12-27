import { Routes, Route, Router } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import {
  miniApp, init, viewport, swipeBehavior
} from '@telegram-apps/sdk';
import { useIntegration } from '@telegram-apps/react-router-integration';
import { initNavigator } from '@telegram-apps/sdk-react';
import Earnings from './pages/Earnings';

try {
  init();
  miniApp.mount();
  viewport.expand();
  miniApp.setHeaderColor('#042590');
  miniApp.setBackgroundColor('#042590');
  miniApp.setBottomBarColor('#083ff7');
  swipeBehavior.mount();
  swipeBehavior.disableVertical();
} catch (e) {
  console.log(e);
}

function App() {
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path="/" element={<Earnings />} />
      </Routes>
    </Router>
  );
}

export default App;
