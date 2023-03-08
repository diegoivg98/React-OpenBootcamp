import React, { useRef } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ submit }) => {
    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOS</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit(newText.current.value);
                    newText.current.value = "";
                }}
            >
                <input type="text" ref={newText} />
                <button type="submit">Create Todo</button>
            </form>
        </div>
    );
};

TodoForm.PropTypes = {
    submit: PropTypes.func.isRequired,
};

export default TodoForm;
