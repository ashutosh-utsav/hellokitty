import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article'; // <--- IMPORT THIS
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:categorySlug" element={<Category />} />
          <Route path="category/:categorySlug/:subcategorySlug" element={<Category />} />
          {/* 👇 ADD THIS NEW ROUTE 👇 */}
          <Route path="article/:id" element={<Article />} />
          
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;