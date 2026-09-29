import { useCallback, useMemo, useEffect, useRef, useState } from "react";

const initialHabits = [
  { id: 1, name: "Read 30 minutes", completed: false },
  { id: 2, name: "Exercise", completed: false },
  { id: 3, name: "Practice JavaScript", completed: false }
];

function HabitTracker() {

  //local storage
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : initialHabits;
  });
  //when you type in on the input
  const [habitName, setHabitName] = useState("");
  //input focus
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleTick =  useCallback ((habitId) => {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
      )
    );
  }, []);

  const handleAddHabit = () => {
    const trimmedHabit = habitName.trim();

    if (!trimmedHabit) return;

    const newHabit = {
      id: Date.now(),
      name: trimmedHabit,
      completed: false
    };

    setHabits((currentHabits) => [...currentHabits, newHabit]);
    setHabitName("");
    inputRef.current?.focus();
  };

  const completedCount = useMemo(() => {
    return habits.filter((habit) => habit.completed).length;
  }, [habits]);

  const removeHabit = useCallback((habitId) => {
    setHabits((currentHabits) =>
        currentHabits.filter((habit) => habit.id !== habitId)
    );
  }, []);


  return (
    <div className="Home">

      <div className="header">
        <h1>My habit tracker</h1>
        completed: {completedCount}
      </div>
      

      <div className="add-habit">
        <input
          type="text"
          value={habitName}
          onChange={(event) => setHabitName(event.target.value)}
          
          placeholder="Add a new habit"
          ref={inputRef}
        />
        <button
          type="button"
          onClick={handleAddHabit}
        >
          Add
        </button>
      </div>

      <div className="habit-list">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`habit-item ${habit.completed ? "completed" : ""}`}
          >
            <label>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => handleTick(habit.id)}
              />
              <span>{habit.name}</span>
            </label>

            <button onClick={() => removeHabit(habit.id)}>
              Delete
            </button>
            
          </div>
        ))}
      </div>


    </div>
  );
}

export default HabitTracker;