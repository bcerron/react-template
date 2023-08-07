const SpeedCalculate = ({ speed }) => {
    const kmToMeters = speed * 1000;
    const hoursToSeconds = 60 * 60;

    const result = (kmToMeters / hoursToSeconds).toFixed(2);

    return (
        <p>
            {speed}km/h son {result}m/s
        </p>
    );
};

export default SpeedCalculate;
