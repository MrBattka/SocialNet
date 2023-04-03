import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import DesktopView from './adaptiveComponents/DesktopView';
import MobileViewCont from './adaptiveComponents/MobileView';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import { useTheme } from './components/Common/useTheme/useTheme';
import { initializeApp } from './Redux/app-reduser';
import { persistor, store } from './Redux/redux-store';

const App = ({ isAuth, authUserId, initializeApp, initialize }) => {

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)"
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  })

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)"
  });

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    initializeApp()
  }, [])

  if (!initialize) {
    return <Preloader />
  }

  return (
    <div>
      {
        isDesktop && <DesktopView isAuth={isAuth} authUserId={authUserId} />
        || isMobile && <MobileViewCont />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const AppSocialNet = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<AppContainer />} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default AppSocialNet