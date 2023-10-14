import React from "react";
import TaskItem from "./TaskItem";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { taskAction } from "../../store/taskSlice";

const ListItems = ({ title, cssClass, list, status }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const handleDrop = (task) => {
    console.log(task, task.status, status, "handleDrop");
    dispatch(
      taskAction.removeTask({
        task,
        id: task.id,
        status: task.status,
        drop: "drop",
      })
    );
    dispatch(taskAction.addTask({ task, status, drop: "drop" }));
  };
  return (
    <div ref={drop} className={"todo"}>
      <div className={cssClass}>
        <span>{title}</span>
        <div className="taskNumbers">{list.length}</div>
      </div>
      <div className="listItems">
        {list.map((task, index) => {
          return (
            <TaskItem
              key={index}
              id={task.id}
              task={task}
              title={task.task}
              status={status}
              cssClass={cssClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;
