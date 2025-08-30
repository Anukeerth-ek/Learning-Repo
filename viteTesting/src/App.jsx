import "./App.css";
import { fetchUserDetails } from "./utils/helper";

function App() {
     return <>{fetchUserDetails()}
     
     </>;
}

export default App;
