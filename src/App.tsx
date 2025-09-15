import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Diğer route'lar buraya eklenecek */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
