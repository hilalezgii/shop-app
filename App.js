import AuthProvider from './src/contex/AuthProvider';
import Router from './src/router';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
