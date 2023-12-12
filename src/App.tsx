import Layout from './components/Layout';
import Background from './components/Background';
import { DATA_EXAMPLE } from './constants';

function App() {
  return (
    <main>
      <Layout data={DATA_EXAMPLE} />
      <Background />
    </main>
  );
}

export default App;
