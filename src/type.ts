export interface Task {
	id: string;
	text: string;
	confirm: boolean;
  }
  
export interface HomeState {
	tasks: Task[];
	textTask: string;
}