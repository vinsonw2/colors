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

type UpdateCMYKColorAction = {
  type: 'update-cmyk-color';
  payload: { cmyk: [number, number, number, number] };
};
type AdjustColorActions =
  | UpdateColorAction
  | UpdateRGBColorAction
  | UpdateCMYKColorAction;
