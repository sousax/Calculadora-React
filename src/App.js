import {Container, Content, Row} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import {useState} from 'react';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')



  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  
  }

  const handleAllClear = () => { 
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');

  };

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('+');

    }

    else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
      setOperation('')
    }
  }

  const handleSubNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber (currentNumber);
      handleOnClear();
      setOperation('-');
    }

    else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(sub);
      setOperation('')
    }
  }
  
  const handleMultiNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('*');
    }

    else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(multi);
      setOperation('')
    }
  }

  const handleDivNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('/');
    }

    else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(div);
      setOperation('')
    }
  }

  const handleHighNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('^');
    }
    const high = Math.pow(Number(firstNumber), Number(currentNumber));
    setCurrentNumber(high);
    setOperation('')
  }


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case '*':
          handleMultiNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '**':
          handleHighNumber();
          break;
        
        default:

          break;
      }

    }
  }
  
  


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label='%' onClick={() => handleAddNumber('')}/>  
            <Button label='^' onClick={handleHighNumber}/>
          <Button label='C' onClick={handleAllClear} />
          <Button label='<' onClick={handleOnClear} />
        </Row>
        <Row>
        <Button label='0' onClick={() => handleAddNumber('0')}/>  
            <Button label='.' onClick={() => handleAddNumber('.')}/>
          <Button label='/' onClick={handleDivNumber}/>
                <Button label='*' onClick={handleMultiNumber}/>
        </Row>
        <Row>
        <Button label='7' onClick={() => handleAddNumber('7')}/>  
            <Button label='8' onClick={() => handleAddNumber('8')}/>
              <Button label='9' onClick={() => handleAddNumber('9')}/>
                <Button label='-' onClick={handleSubNumber}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>  
            <Button label='5' onClick={() => handleAddNumber('5')}/>
              <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={ handleSumNumber } />
        </Row>
        <Row>
         <Button label='1' onClick={() => handleAddNumber('1')}/>  
           <Button label='2' onClick={() => handleAddNumber('2')}/>
             <Button label = '3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={handleEquals} />
        </Row>

      
      </Content>
    </Container>
  );
}

export default App;
