import { createContext, PropsWithChildren, useReducer } from 'react';
import { colorReducer, initialState } from './color-reducer';

type ColorContextType = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

export const ColorContext = createContext<ColorContextType>({
  hexColor: '#66eeff',
} as ColorContextType);
export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
