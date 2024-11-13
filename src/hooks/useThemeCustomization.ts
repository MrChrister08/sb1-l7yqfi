import { useReducer } from 'react';
import { ThemeCustomization, CustomizationAction } from '../types';

const initialState: ThemeCustomization = {
  primaryColor: '#22c55e',
  fontSize: 14,
  spacing: 16,
  terminalOpacity: 1,
  fontFamily: 'mono',
  customGlow: false,
};

function reducer(state: ThemeCustomization, action: CustomizationAction): ThemeCustomization {
  switch (action.type) {
    case 'SET_PRIMARY_COLOR':
      return { ...state, primaryColor: action.payload };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SET_SPACING':
      return { ...state, spacing: action.payload };
    case 'SET_OPACITY':
      return { ...state, terminalOpacity: action.payload };
    case 'SET_FONT_FAMILY':
      return { ...state, fontFamily: action.payload };
    case 'TOGGLE_GLOW':
      return { ...state, customGlow: !state.customGlow };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useThemeCustomization() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}