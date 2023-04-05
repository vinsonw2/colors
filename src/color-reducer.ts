import { rgb } from 'color-convert';
type UpdateColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] };
};

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: UpdateColorAction | UpdateRGBColorAction,
) => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, hexColor: action.payload.hexColor };
    case 'update-rgb-color':
      return { ...state, hexColor: rgb.hex(action.payload.rgb) };
    default:
      return state;
  }
};
