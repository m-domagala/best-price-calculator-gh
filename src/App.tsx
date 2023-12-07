import { useQuery } from 'react-query';
import axios from 'axios';
import Layout from './components/Layout';
import ErrorMessage from './components/messages/ErrorMessage';
import LoadingMessage from './components/messages/LoadingMessage';
import Background from './components/Background';
import { API_URL, DATA_QUERY } from './constants';

function App() {
  const { isLoading, error, data } = useQuery(DATA_QUERY, () =>
    axios(API_URL).then((response) => response.data),
  );

  return (
    <main>
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage error={error} />}
      {data && <Layout data={data} />}
      <Background />
    </main>
  );
}

export default App;
