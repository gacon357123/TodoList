import Box from "./box";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.css";

const Todocontent = ({ setModal, Tasklist, deleteTask, updateListArry, Process, Done, Archive }) => {
  return (
    <div className="container">
      <Droppable droppableId="Tasklist">
        {(provided) => {
          return (
            <div className="Todo  " ref={provided.innerRef} {...provided.droppableProps}>
              <div className="Add-todo">
                <h4>
                  <b>To Do</b>
                </h4>
                <CgAddR className="Add-btn" onClick={() => setModal(true)} />
              </div>

              <div key="Tasklist" className="todo-content">
                {Tasklist.map((obj, index) => (
                  <Box
                    key={index}
                    taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArry={updateListArry}
                  />
                ))}
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      <Droppable droppableId="Process">
        {(provided) => (
          <div key="Process" className="Process  " ref={provided.innerRef} {...provided.droppableProps}>
            <h4>
              <b>Process</b>
            </h4>
            <div className="todo-content">
              {Process.map((obj, index) => (
                <Box key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArry={updateListArry} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Done">
        {(provided) => (
          <div className="Done " ref={provided.innerRef} {...provided.droppableProps}>
            <h4>
              <b>Done</b>
            </h4>
            <div key="Done" className="todo-content">
              {Done.map((obj, index) => (
                <Box key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArry={updateListArry} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Archive">
        {(provided) => (
          <div className="Archive" ref={provided.innerRef} {...provided.droppableProps}>
            <h4>
              <b>Archive</b>
            </h4>
            <div key="Archive" className="todo-content">
              {Archive.map((obj, index) => (
                <Box key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArry={updateListArry} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todocontent;
