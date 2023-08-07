const FahrenheitToCelsius = ({ grades }) => {
    const result = ((grades - 32) / 1.8).toFixed(2);

    return (
        <p>
            {grades} ºF son {result} ºC
        </p>
    );
};

export default FahrenheitToCelsius;
