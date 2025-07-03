import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, updateTaskStatus}) => {
  return (
    <div id='taskList' className=' h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return<AcceptTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus}/>
            }
            if(elem.completed){
                return<CompleteTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus}/>
            }
            if(elem.failed){
                return<FailedTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus}/>
            }
            if(elem.newTask){
                return<NewTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus}/>
            }
       })}
    </div>
  )
}

export default TaskList
