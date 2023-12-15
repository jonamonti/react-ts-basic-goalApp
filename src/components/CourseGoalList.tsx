import { type FC } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalT } from "./types.ts";

type Props = {
  goals: CourseGoalT[],
  onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<Props> = ({ goals, onDeleteGoal }) => {
  return <ul>
    {goals.map((el) => {
      return (
        <li key={el.id}>
          <CourseGoal id={el.id} title={el.title} onDelete={onDeleteGoal}>
            <p>{el.description}</p>
          </CourseGoal>
        </li>)
    })}

  </ul>
}

export default CourseGoalList;