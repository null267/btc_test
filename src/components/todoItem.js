import React, {
    useContext,
} from 'react';

import DispatchContext from '../context/dispatchContext';

const TodoItem = ({ todo }) => {
    const dispatch = useContext(DispatchContext);

    const handleChange = () =>
        dispatch({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id,
        });

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={handleChange}
                />
                {todo.task}
            </label>
        </li>
    );
};
export default TodoItem;