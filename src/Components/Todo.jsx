import { useEffect, useRef,useState} from 'react'
import todoicon from '../assets/todo_icon.png'
import Todolist from './Todolist'

const Todo = () => {

    const [todoList, setTodoList] = useState(
        localStorage.getItem("todos") ? 
        JSON.parse(localStorage.getItem("todos")) : []
    )

    const inputRef = useRef()

    const add = () => {
        const inputVal = inputRef.current.value.trim()

        if(inputVal===""){
            return null;
        }
        
        const newTodo = {
            id: Date.now(),
            text:inputVal,
            isComplete:false

        }

        setTodoList((pre) => [...pre,newTodo])
        inputRef.current.value = "";
    }

    const deleteTodo = (id)=>{
        setTodoList((pre)=>{
            return pre.filter((todo)=> todo.id !== id)
        })

    }

    const toggle = (id) =>{
        setTodoList((pre)=>{
            return pre.map((todo)=>{
                if(todo.id === id){
                    return {...todo,isComplete: !todo.isComplete}
                }
                return todo
            })
            
        })

    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])
    return (
        <div>
            {/* Todo-main */}

            <div className="h-screen bg-slate-800 flex justify-center items-center ">
                <div className="h-3/4 bg-white w-1/3 rounded items-center ">

                {/* Head */}

                    <div className="flex justify-center pt-3 font-bold text-4xl ">
                        <img src={todoicon} className='h-8 mt-2 pr-3'/>
                        Todo-List
                    </div>

                {/* Type todo */}

                    <div className=" mt-10 flex justify-center items-center mb-10 ">
                        <input ref={inputRef} type='text' placeholder='Add task todo..' className='h-12 p-3  outline-none bg-gray-200 rounded w-2/3 '/>
                        <button className='bg-orange-500 text-white font-bold h-12 w-20 rounded  ' onClick={add}>ADD</button>
                    </div>

                {/* Todo-List */}

                {todoList.map((item,index)=>{
                    return <Todolist key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                })}
                </div>
            </div>
        </div>
    )
}

export default Todo