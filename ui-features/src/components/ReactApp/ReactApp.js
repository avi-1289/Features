import useRedirectTo from "../../hooks/useRedirectTo";
import "./ReactApp.css";

function ReactApp() {
  const { redirectTo } = useRedirectTo();
  const handleRedirection = (path) => {
    redirectTo(path);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Na Projects</p>
        <a onClick={() => handleRedirection("/xoxo")}>XOXO</a>
        <a onClick={() => handleRedirection("/otpValidator")}>Otp Validator</a>
      </header>
    </div>
  );
}

export default ReactApp;
