import "./App.css";
import useTg from "./hooks/useTg";

function App() {
  const { user } = useTg();

  return (
    <>
      <p className="read-the-docs">Your tg data:</p>
      {user ? (
        <div>
          <span>Your id: {user?.id}</span>
          <span>Your username: {user?.username}</span>
          <span>Your name: {user?.first_name + " " + user?.last_name}</span>
          <span>Your language code: {user?.language_code}</span>
          <span>Is premium: {user?.is_premium}</span>
        </div>
      ) : (
        <div>Tg not found :(</div>
      )}
    </>
  );
}

export default App;
