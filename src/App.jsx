import { Header } from "./Header";
import Layout from "./Layout";
import { PrincipalScreen } from "./PrincipalScreen";
import Aside from "./aside/Aside";
import ContainerTodos from "./ContainerTodos";
import ItemTodo from "./ItemTodo";
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

function App() {

  return (
    <Layout>
      <Aside />
      <PrincipalScreen>
        <Header />
        <ContainerTodos>
          {
            exampleTodosArray.map((todo, key) => (
              <ItemTodo todoObject={todo} key={key} />
            ))
          }
        </ContainerTodos>
      </PrincipalScreen>
    </Layout>
  )
}

export default App
