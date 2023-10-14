import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { taskAction } from "../../store/taskSlice";
import { useDrag } from "react-dnd";
const TaskItem = ({ task, index, title, status, id, cssClass }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      taskAction.removeTask({
        listName: title,
        id,
        title,
        cssClass,
        task,
        status,
      })
    );
  };
  return (
    <div ref={drag} className="mainTaskItem">
      <span>{title}</span>
      <CancelIcon className="cancelIcon" onClick={handleClick} />
    </div>
  );
};

export default TaskItem;
