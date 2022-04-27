import { LABEL_COUNTER } from '../../../../common/constants';
import { ButtonRounded } from '../../../../components';
import {
  Counter
} from './styles';

import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { decrement, increment, selectCount } from './counterRoundedSlice';

const CounterRounded = () => {

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Counter.Area>
      <Counter.ValueArea>
        <span>{count}</span>
      </Counter.ValueArea>
      <Counter.ButtonsArea
        className="counter__button-area"
      >
        <ButtonRounded
          label={LABEL_COUNTER.INCREMENT}
          onClick={() => dispatch(increment())}
        />
        <ButtonRounded
          label={LABEL_COUNTER.DECREMENT}
          onClick={() => dispatch(decrement())}
        />
      </Counter.ButtonsArea>
    </Counter.Area>
  )
}

export default CounterRounded;