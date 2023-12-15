import { type FC, type PropsWithChildren } from "react"
// we use type decorator in this importo to let the compiler know this import is not needed when building
import { GoalT } from "./types"



type Props = PropsWithChildren<GoalT>
// this generic type lets us not specify children type in Goal
// we have to create a custom type for the props we will receive, and pass them between angular brackets

const CourseGoal: FC<Props> = ({ id, title, children, onDelete }) => {
  // FC is another generic, we use it with functional components. Through <> we pass the types. Is the same as line below
  // const CourseGoal = ({ title, children }: Props) => {
  const handleDelete = () => {
    onDelete(id)
  }
  return <article>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    <button onClick={handleDelete}>Delete</button>
  </article>
}

export default CourseGoal;