const CalculateSquareArea = ({ side }) => {
    const result = side * side;
    return (
        <p>
            El area del cuadrado de lado {side} es <b>{result}</b>
        </p>
    );
};
export default CalculateSquareArea;
