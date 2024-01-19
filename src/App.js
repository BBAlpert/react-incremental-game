import { store } from "./store";
import { Provider } from "react-redux";
import { GameController } from "./game/GameController";

export default function App() {
  return (
    <Provider store={store}>
      <GameController />
    </Provider>
  );
}
