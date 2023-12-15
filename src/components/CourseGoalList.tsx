import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { CourseGoalT } from "./types.ts";
import InfoBox from "./InfoBox.tsx";

type Props = {
  goals: CourseGoalT[],
  onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<Props> = ({ goals, onDeleteGoal }) => {

  if (goals.length === 0) {
    return <InfoBox mode={"hint"}>You have no goals yet. Add some here!</InfoBox>
  }

  let warningBox: ReactNode;
  let severity: 'low' | 'medium' | 'high';
  if (goals.length >= 4) {
    if (goals.length <= 6) severity = 'low'
    if (goals.length <= 8) severity = 'medium'; else severity = 'high'
    warningBox = <InfoBox mode='warning' severity={severity}>Dont add too many things!</InfoBox>
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((el) => {
          return (
            <li key={el.id}>
              <CourseGoal id={el.id} title={el.title} onDelete={onDeleteGoal}>
                <p>{el.description}</p>
              </CourseGoal>
            </li>)
        })}

      </ul>
    </>
  )
}

export default CourseGoalList;