interface ITodoCard {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

 interface IListProps {
   todos: ITodoCard[];
   removeTodo: (todo: ITodoCard) => void;
   completeTodo: (todo: ITodoCard) => void;
 }

interface ITodoCardProps {
  todo: ITodoCard;
  removeTodo: (todo: ITodoCard) => void;
  completeTodo: (todo: ITodoCard) => void;
}

interface IFormProps {
  todos: ITodoCard[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoCard[]>>
}

export type { ITodoCard, IListProps, IFormProps, ITodoCardProps }