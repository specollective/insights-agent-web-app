import { Routes, Route } from 'react-router-dom'
import { Layout, Landing } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
