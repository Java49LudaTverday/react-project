import {useSelector} from 'react-redux';
type Props = {
    factor: number;
}
export const CounterMultiply: React.FC<Props> = ({factor}) => {
const count = useSelector<any, number>(state => state.counter.count)
    return <div>
        <p>factor = {factor}</p>
        <p>{count}*{factor} = {count*factor}</p>
    </div>
}