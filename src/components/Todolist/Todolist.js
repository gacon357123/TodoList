import "bootstrap/dist/css/bootstrap.css";
import "./Todo.scss";
import React, { useEffect, useImperativeHandle, useState } from "react";
import Popup from "./popup";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Todocontent from "./Todocontent";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {
  const [Tasklist, setTasklist] = useState([]);
  const [modal, setModal] = useState(false);
  const [Process, setProcess] = useState([]);
  const [Done, setDone] = useState([]);
  const [Archive, setArchive] = useState([]);

  const updateListArry = (obj, index) => {
    let tempList = Tasklist;
    tempList[index] = obj;
    localStorage.setItem("Tasklist", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };

  useEffect(() => {
    let arr = localStorage.getItem("Tasklist");
    if (arr) {
      let obj = JSON.parse(arr);
      setTasklist(obj);
    }
  }, []);

  const SaveTask = (taskObj) => {
    let tempList = Tasklist;
    tempList.push(taskObj);
    localStorage.setItem("Tasklist", JSON.stringify(tempList));
    setTasklist(tempList);
    setModal(false);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const deleteTask = (index) => {
    let tempList = Tasklist;
    tempList.splice(index, 1);
    localStorage.setItem("Tasklist", JSON.stringify(tempList));
    setTasklist(tempList);
    window.location.reload();
  };

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;

  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems,
  //       },
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems,
  //       },
  //     });
  //   }
  // };

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    let add,
      active = Tasklist,
      proces = Process,
      done = Done,
      arc = Archive;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    if (source.droppableId !== destination.droppableId) {
      switch (source.droppableId) {
        case "Tasklist":
          add = active[source.index];
          active.splice(source.index, 1);
          break;
        case "Process":
          add = proces[source.index];
          proces.splice(source.index, 1);
          break;
        case "Done":
          add = done[source.index];
          done.splice(source.index, 1);
          break;
        case "Archive":
          add = arc[source.index];
          arc.splice(source.index, 1);
          break;
        default:
          console.log("default");
      }
      switch (destination.droppableId) {
        case "Tasklist":
          active.splice(destination.index, 0, add);
          setTasklist(active);
          break;
        case "Process":
          proces.splice(destination.index, 0, add);
          setProcess(proces);
          break;
        case "Done":
          done.splice(destination.index, 0, add);
          setDone(done);
          break;
        case "Archive":
          arc.splice(destination.index, 0, add);
          setArchive(arc);
          break;
        default:
          console.log("default");
      }
    }
  };

  return (
    <div className="main">
      <DragDropContext onDragEnd={onDragEnd}>
        <Popup toggle={toggle} modal={modal} Save={SaveTask} setTasklist={setTasklist} />
        <Todocontent
          Tasklist={Tasklist}
          updateListArry={updateListArry}
          deleteTask={deleteTask}
          Process={Process}
          setProcess={setProcess}
          Done={Done}
          setDone={setDone}
          Archive={Archive}
          setArchive={setArchive}
          setModal={setModal}
        />
      </DragDropContext>
    </div>
  );
};

export default Todolist;
