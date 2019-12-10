import React from 'react';


export const Todos = (props) => {
    return(
        <ol>
            {
                props.todolist.map( (t) =>{
                    return (
                    <li key={t.id}>
                        <h2>{t.todo} 
                            <input 
                                checked={props.done}
                                onChange={() => props.markAsDone(t)}
                                value={props.done}
                                type="checkbox" 
                            />
                        </h2>
                    </li>
                    )
                }
                )
            }        
        </ol>
        
        
    )
}