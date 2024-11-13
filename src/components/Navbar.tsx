import { Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
  { path: '/terminal', label: 'Terminal' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-mono font-bold text-gray-900 dark:text-white">
              developer
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}