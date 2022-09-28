import View from "./context/view/view";
import User from "./context/user/user";
import Layout from "./components/layout/layout";
function App() {
  return (
    <View>
      <User>
        <Layout />
      </User>
    </View>
  );
}

export default App;
