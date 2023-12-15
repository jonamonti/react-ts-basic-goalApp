export type GoalT = {
  id: number
  title: string
  onDelete : (id: number) => void
}

export type CourseGoalT = {
  title: string
  description: string
  id: number
}

export type HeaderT = {
  image: {
    src: string
    alt: string
  }
}

export type NewGoalT = {
  onAddGoal: (goal: string, summary: string) => void
}