import SayHello from './components/sayHello/SayHello';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';
import ThreeNumbers from './components/threeNumbers/ThreeNumbers';
import SpeedCalculate from './components/speedCalculate/SpeedCalculate';

const App = () => {
    return (
        <>
            <SayHello name='Pedro' />
            <CalculateSquareArea side={10} />
            <CalculateTriangleArea base={15} height={30} />
            <CalculateCircleArea radius={3} />
            <CelsiusToFahrenheit grades={30} />
            <FahrenheitToCelsius grades={90} />
            <TotalPrice price={20} />
            <WriteMessage name='Adrian' material='camisetas' size='XXL' note='Estoy rellenito' />
            <ThreeNumbers num1={2} num2={3} num3={7} />
            <SpeedCalculate speed={50} />
        </>
    );
};

export default App;
