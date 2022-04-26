import { ChatApp } from './ChatApp';
import { LayoutContainer } from './components';
import { LoginPage } from './pages';

function App() {
  let isLoggedIn = true;

  return (
    <LayoutContainer>
      {isLoggedIn ? <ChatApp /> : <LoginPage />}
    </LayoutContainer>
  );
};

export default App;
