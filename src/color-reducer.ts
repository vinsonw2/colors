import { rgb, cmyk } from 'color-convert';

const isHexColor = (s: string): s is string => {
  return s.startsWith('#');
};

type ColorFormats = 'rgb' | 'hex' | 'hsl';
type ActionTypes = `update-${ColorFormats}-color`;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, hexColor: action.payload.hexColor };
    case 'update-rgb-color':
      return {
        ...state,
        hexColor: '#' + rgb.hex(action.payload.rgb),
      };
    case 'update-cmyk-color':
      return {
        ...state,
        hexColor: '#' + cmyk.hex(action.payload.cmyk),
      };
    default:
      return state;
  }
};
