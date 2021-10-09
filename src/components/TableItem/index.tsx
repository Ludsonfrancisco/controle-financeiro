import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';


type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableHeadColumn>{formatDate(item.date)}</C.TableHeadColumn>
            <C.TableHeadColumn>
                <C.Category color={categories[item.category].color}> {categories[item.category].title} </C.Category>
            </C.TableHeadColumn>
            <C.TableHeadColumn>{item.title}</C.TableHeadColumn>
            <C.TableHeadColumn>
                <C.Value color={ categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableHeadColumn>
        </C.TableLine>
    );
}