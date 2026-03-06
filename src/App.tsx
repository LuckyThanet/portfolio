import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';
import Navbar from './components/NavBar';


function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />        
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
