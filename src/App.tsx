import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { Terminal } from './pages/Terminal';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terminal" element={<Terminal />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;