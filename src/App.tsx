import Header from "./components/Header"
import goalsImg from './assets/goals.jpg'
import { useState } from "react"
import CourseGoalList from "./components/CourseGoalList.tsx"
import { CourseGoalT } from "./components/types.ts"
import NewGoal from "./components/NewGoal.tsx"

function App() {
  const [goals, setGoals] = useState<CourseGoalT[]>([])

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoalT = {
      title: goal,
      description: summary,
      id: Math.random()
    }
    setGoals((prev) => {
      return [...prev, newGoal]
    });
  }

  const handleDeleteGoal = (id: number) => {
    const newGoalsList: CourseGoalT[] = goals.filter((el) => el.id !== id)
    setGoals(newGoalsList)
  }
  console.log(goals)

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "List of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main >
  )
}

export default App
