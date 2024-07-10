/* eslint-disable react/prop-types */
import tick from '../assets/tick.png'
import nottick from '../assets/not_tick.png'
import del from '../assets/delete.png'

const Todolist = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
      <div className="flex items-center my-3 gap-2 mt-6">
        <div onClick={()=> toggle(id)} className={`flex flex-1 items-center cursor-pointer pl-8 ${isComplete? "line-through":""} `}>
        <img src={isComplete?tick:nottick} alt='' className='w-7'/>
        <p className='ml-4 text-[17px]'>{text}</p>
        </div>
        <img onClick={()=>deleteTodo(id)} src={del} className='pr-8 h-6 cursor-pointer'/>
    </div>
  )
}

export default Todolist