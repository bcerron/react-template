const ThreeNumbers = ({ num1, num2, num3 }) => {
    const average = (num1 + num2 + num3) / 3;
    return (
        <p>
            La media de {num1}, {num2} y {num3} es <b>{average}</b>{' '}
        </p>
    );
};

export default ThreeNumbers;
