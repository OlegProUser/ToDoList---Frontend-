import React from "react";
import {useState} from 'react';
import {BsCheckLg} from 'react-icons/bs';
import { taskBase } from "../taskBase";
import {BsFillTrash3Fill} from 'react-icons/bs';

const Home = ()=>{

	const [tasks, setTasks] = useState(taskBase);
	const [textTask, setTextTask] = useState('');
	const handleConfirm = (id) => {
		const updatedTasks = tasks.map((task) => {
		  if (task.id === id) {
			return { ...task, confirm: !task.confirm };
		  }
		  return task;
		});
		setTasks(updatedTasks);
	  };

	  const handleDelete = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	  };

	  const handleNewTask = (e)=>{
		
		if ((e.keyCode === 13)||(e.type === 'click')) {
			e.preventDefault();
			if(textTask){
				const newTask = {id:new Date()  ,text:textTask, confirm:false}
				const updatedTasks = [newTask, ...tasks]
				setTasks(updatedTasks)
			}
			setTextTask('');
		}
	  }

	return (
		<div className="w-[700px] p-5 min-h-screen mx-auto bg-neutral-700">
			<h1 className="block text-3xl mt-6 mb-10  text-center">To Do List - Easy</h1>
			<form className="new-task_form">
				<input onKeyDown={handleNewTask} value={textTask} onChange={(e)=> setTextTask(e.target.value)} type="text" className="w-[70%]  border-b-[2px] border-orange-600 transition duration-[250ms] focus:border-yellow-400 bg-slate-900 mr-6" />
				<button onClick={handleNewTask} className="bg-black border-white border active:border-yellow-500 rounded-xl w-[100px] h-[40px]">Enter</button>
			</form>
			<div>
				{tasks.length  ?  tasks.map((task) => (
						<div key={task.id} className={task.confirm ? "rounded-xl flex justify-between border-4 border-black hover:border-black ease-in-out duration-[400ms] items-center min-w-[650px] min-h-[65px] mx-auto mb-5 bg-orange-900" :
						"rounded-xl flex justify-between border-4 border-black hover:border-orange-500 ease-in-out duration-[600ms] items-center min-w-[650px] min-h-[65px] mx-auto mb-5 bg-neutral-900"}>
						<div className="flex items-center">
							<div onClick={() => handleConfirm(task.id)} className="w-9 mx-3 border-orange-600 h-9 border-4 rounded-full" >
								{task.confirm ? <BsCheckLg size={29} color="orange" /> : null}
							</div>
							<span className={task.confirm ? "line-through decoration-orange-600" :
							"no-underline font-bold"
							
							}>
								{task.text}
							</span>
						</div>
							<div onClick={() => handleDelete(task.id)} className={task.confirm ? "mr-10 ease-in shadow-lg shadow-orange-950 transition duration-150 hover:text-yellow-500":"mr-10 ease-in  transition duration-150  hover:text-red-600"}>
								<BsFillTrash3Fill size={20} />
							</div>
						</div>
				)): 
					<div className="text-orange-400 text-center block pt-10 text-5xl font-bold">No tasks</div>
				} 
			</div>
		</div>
	);
}
export default Home;