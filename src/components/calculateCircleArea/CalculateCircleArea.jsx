const CalculateCircleArea = ({ radius }) => {
    const result = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    return (
        <p>
            El radio de un circulo de radio {radius} es: <b>{result}</b>
        </p>
    );
};

export default CalculateCircleArea;
