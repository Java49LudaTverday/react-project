import { useDispatch } from 'react-redux';
import { counterActions } from '../redux/counterSlice';
type Props = {
    operand: number;
}
export const CounterUpdater: React.FC<Props> = ({operand}) => {
    const dispatch = useDispatch();

    return <div>
        <p>operand = {operand}</p>
        <button onClick={() => dispatch(counterActions.increment(operand))}>+</button>
        <button onClick={() => dispatch(counterActions.decrement(operand))}>-</button>
        <button onClick={() => dispatch(counterActions.reset())}>reset</button>
    </div>
}