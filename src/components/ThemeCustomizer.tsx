import { Settings } from 'lucide-react';
import { useState } from 'react';
import { ThemeCustomization, CustomizationAction } from '../types';

interface Props {
  customization: ThemeCustomization;
  dispatch: React.Dispatch<CustomizationAction>;
}

export function ThemeCustomizer({ customization, dispatch }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Customize theme"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-72">
          <h3 className="text-lg font-semibold mb-4">Customize Theme</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Color
              </label>
              <input
                type="color"
                value={customization.primaryColor}
                onChange={(e) => dispatch({ 
                  type: 'SET_PRIMARY_COLOR', 
                  payload: e.target.value 
                })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Font Size ({customization.fontSize}px)
              </label>
              <input
                type="range"
                min="12"
                max="20"
                value={customization.fontSize}
                onChange={(e) => dispatch({
                  type: 'SET_FONT_SIZE',
                  payload: Number(e.target.value)
                })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Spacing ({customization.spacing}px)
              </label>
              <input
                type="range"
                min="8"
                max="24"
                value={customization.spacing}
                onChange={(e) => dispatch({
                  type: 'SET_SPACING',
                  payload: Number(e.target.value)
                })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Terminal Opacity
              </label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.1"
                value={customization.terminalOpacity}
                onChange={(e) => dispatch({
                  type: 'SET_OPACITY',
                  payload: Number(e.target.value)
                })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Font Family
              </label>
              <select
                value={customization.fontFamily}
                onChange={(e) => dispatch({
                  type: 'SET_FONT_FAMILY',
                  payload: e.target.value as 'mono' | 'sans' | 'serif'
                })}
                className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
              >
                <option value="mono">Monospace</option>
                <option value="sans">Sans Serif</option>
                <option value="serif">Serif</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Terminal Glow Effect
              </label>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_GLOW' })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  customization.customGlow 
                    ? 'bg-green-500' 
                    : 'bg-gray-400'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                    customization.customGlow 
                      ? 'translate-x-7' 
                      : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => dispatch({ type: 'RESET' })}
              className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
}