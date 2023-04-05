import { hex } from 'color-convert';
import { Dispatch, useContext } from 'react';
import { ColorContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
  dispatch?: Dispatch<AdjustColorActions>;
};

const HexToRGB = ({ hexColor }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;
  const { dispatch } = useContext(ColorContext);

  const updateRGBColor = (r: number, g: number, b: number) => {
    dispatch({
      type: 'update-rgb-color',
      payload: { rgb: [r, g, b] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => updateRGBColor(e.target.valueAsNumber, g, b)}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => updateRGBColor(r, e.target.valueAsNumber, b)}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => updateRGBColor(r, g, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToRGB;
