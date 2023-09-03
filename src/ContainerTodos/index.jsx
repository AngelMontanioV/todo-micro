import { ItemTodo } from "./ItemTodo"

const exampleTodosArray = [
  {
    id: 1,
    todo: "Este es un TODO",
    cheked: false
  },
  {
    id: 2,
    todo: "Este es un TODO 2",
    cheked: false
  },
  {
    id: 3,
    todo: "Este es un TODO 3",
    cheked: false
  }
]


const ContainerTodos = () => {
  console.log("container Todo")
  return (
    <div>
      {
        exampleTodosArray.map((todo, key) => (
          <ItemTodo todoObject={todo} key={key} />
        ))
      }
    </div>
  );
};

export default ContainerTodos;

