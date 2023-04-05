type HexColorProps = {
  hexColor: string;
};

const HexColor = ({ hexColor }: HexColorProps) => {
  return (
    <section className="information font-semibold" style={{ color: 'red' }}>
      {hexColor.toUpperCase()}
    </section>
  );
};

export default HexColor;
