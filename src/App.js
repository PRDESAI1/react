import CakeContener from "./Component/CakeContener";
import { Provider } from "react-redux";
import store from "./Redux/Store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContener/>
      </div>
    
    
    </Provider>
   
  );
}

export default App;
