const TotalPrice = ({ price }) => {
    const result = price + price * 0.21;
    return (
        <p>
            Un valor de {price} con IVA es de {result}
        </p>
    );
};

export default TotalPrice;
