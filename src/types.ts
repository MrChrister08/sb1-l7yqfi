export type Theme = 'dark' | 'light';

export interface NavItem {
  path: string;
  label: string;
}

export interface ThemeCustomization {
  primaryColor: string;
  fontSize: number;
  spacing: number;
  terminalOpacity: number;
  fontFamily: 'mono' | 'sans' | 'serif';
  customGlow: boolean;
}

export type CustomizationAction = 
  | { type: 'SET_PRIMARY_COLOR'; payload: string }
  | { type: 'SET_FONT_SIZE'; payload: number }
  | { type: 'SET_SPACING'; payload: number }
  | { type: 'SET_OPACITY'; payload: number }
  | { type: 'SET_FONT_FAMILY'; payload: 'mono' | 'sans' | 'serif' }
  | { type: 'TOGGLE_GLOW' }
  | { type: 'RESET' };