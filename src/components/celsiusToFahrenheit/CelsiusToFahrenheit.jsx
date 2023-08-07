const CelsiusToFahrenheit = ({ grades }) => {
    const result = grades * 1.8 + 32;

    return (
        <p>
            {grades} ºC son {result} ºF
        </p>
    );
};

export default CelsiusToFahrenheit;
