import { LABEL_COUNTER } from '../../../../common/constants';
import { ButtonRounded } from '../../../../components';
import {
  Counter
} from './styles';

const CounterRounded = () => {
  return (
    <Counter.Area>
      <Counter.ValueArea>
        <span>0</span>
      </Counter.ValueArea>
      <Counter.ButtonsArea
        className="counter__button-area"
      >
        <ButtonRounded
          label={LABEL_COUNTER.INCREMENT}
          onClick={() => console.log('nada')}
        />
        <ButtonRounded
          label={LABEL_COUNTER.DECREMENT}
          onClick={() => console.log('nada')}
        />
      </Counter.ButtonsArea>
    </Counter.Area>
  )
}

export default CounterRounded;