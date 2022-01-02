import AuthState from "context/auth/authState";
import AppState from "context/app/appState";
import "styles/global.css";


const MyApp = ({ Component, pageProps }) => {
  return (
    <AppState >
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
    </AppState>
  );
}

export default MyApp;