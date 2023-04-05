import { hex } from 'color-convert';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ColorContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToCMYKProps = {
  hexColor: string;
  dispatch?: React.Dispatch<AdjustColorActions>;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;
  const { dispatch } = useContext(ColorContext);
  const updateCMYKColor = (c: number, m: number, y: number, k: number) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: { cmyk: [c, m, y, k] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) => updateCMYKColor(e.target.valueAsNumber, m, y, k)}
      />
      ,
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) => updateCMYKColor(c, e.target.valueAsNumber, y, k)}
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) => updateCMYKColor(c, m, e.target.valueAsNumber, k)}
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) => updateCMYKColor(c, m, y, e.target.valueAsNumber)}
      />
    </section>
  );
};

export default HexToCMYK;
