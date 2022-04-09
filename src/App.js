import { Routes, Route } from 'react-router-dom'
import { Layout, Landing, Download } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/download' element={<Download />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
