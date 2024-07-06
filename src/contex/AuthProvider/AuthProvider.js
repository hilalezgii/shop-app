import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(reducers);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      if (userSession) {
        setUser(JSON.parse(userSession));
      } else {
        setUser(null);
      }
      setAuthLoading(false);  // Auth yükleme durumunu güncelle
    });
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default AuthProvider;
