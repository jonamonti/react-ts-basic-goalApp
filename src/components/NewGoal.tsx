import { useRef, type FormEvent, type FC } from "react";
import { NewGoalT } from "./types";

const NewGoal: FC<NewGoalT> = ({ onAddGoal }) => {
  const goals = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enteredGoal = goals.current!.value
    const enteredSummary = summary.current!.value
    e.currentTarget.reset() // this resets form inputs! built in html function
    onAddGoal(enteredGoal, enteredSummary)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal here</label>
        <input id="goal" type="text" ref={goals} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  )
}

export default NewGoal;