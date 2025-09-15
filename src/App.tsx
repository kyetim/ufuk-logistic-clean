import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Diğer route'lar buraya eklenecek */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
