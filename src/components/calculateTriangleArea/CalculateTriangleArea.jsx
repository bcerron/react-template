const CalculateTriangleArea = ({ base, height }) => {
    const result = (base * height) / 2;
    return (
        <p>
            El area de un triángulo de base {base} y altura {height} es: <b>{result}</b>
        </p>
    );
};

export default CalculateTriangleArea;
