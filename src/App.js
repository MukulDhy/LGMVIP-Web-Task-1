import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [singleTask, setSingleTask] = useState("");
  const [error, setError] = useState(-1);
  const addTask = () => {
    if (taskList.includes(singleTask)) {
      setError(0);
      setTimeout(() => {
        setError(-1);
      }, 8000);
      setSingleTask("");
    } else {
      taskList.push(singleTask);
      setError(1);
      setTimeout(() => {
        setError(-1);
      }, 5000);
      setSingleTask("");
    }
    console.log(taskList);
  };

  const removeTask = (i) => {
    setTaskList(taskList.filter((ele, idx) => ele !== taskList[i]));
  };

  return (
    <div className=" w-screen h-full py-10 flex justify-center items-center">
      <div className="inline-block">
        {error >= 0 && (
          <>
            <div
              className={
                error
                  ? `bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative`
                  : ` bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`
              }
              role="alert"
            >
              
              {error ? (
                <>
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline">Task is Added</span>{" "}
                </>
              ) : (
                <>
                  <strong className="font-bold">Alert!</strong>
                  <span className="block sm:inline">
                    This Task is Already Exist.
                  </span>
                </>
              )}

              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          </>
        )}
        <div className="flex flex-col justify-center items-center px-10 py-6 bg-purple-500 font-bold text-xl">
          <h2 className="text-white font-extrabold text-3xl my-3">
            My Todo List
          </h2>
          <div className="w-full flex">
            <input
              type="text"
              name=""
              id=""
              className="flex-1 outline-none px-2"
              value={singleTask}
              onChange={(e) => setSingleTask(e.target.value)}
            />
            <button
              className="w-30 px-6 py-2 bg-cyan-300 text-blue-950 hover:bg-cyan-700 hover:text-white"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>

        <div className="w-full h-full inline-block">
          {taskList &&
            taskList.map((val, i) => {
              return (
                <>
                  <div
                    className="bg-blue-100 flex justify-between items-center px-5 py-3 hover:bg-blue-500"
                    key={i}
                  >
                    <input type="checkbox" name="" id="" className="m-2" />
                    <p className="font-semibold flex-1">{val}</p>
                    <button className="" onClick={() => removeTask(i)}>
                      <span>X</span>
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
