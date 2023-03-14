import React, { useState } from "react";
import EditTaskPopup from "./edit";
import { Draggable } from "react-beautiful-dnd";
import { CiEdit } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";
import CloseButton from "react-bootstrap/CloseButton";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { ProgressBar } from "react-bootstrap";

const Box = ({ taskObj, index, deleteTask, updateListArry }) => {
  const [colornote, setcolornote] = useState("");

  const handleDelete = () => {
    deleteTask(index);
  };

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const updateTask = (obj) => {
    updateListArry(obj, index);
  };

  const [ShowDetails, SetShowDetails] = useState(true);

  const HandleHideShow = () => {
    SetShowDetails(!ShowDetails);
  };

  const [open, setOpen] = useState(false);

  const handlecolor = () => {
    const colors = ["#71C98D", "#5BA9E9", "#E5566A", "#FEC404", "#FF80CE", "#8778D7", "#00C7E6"];
    const color = colors[Math.floor(colors.length * Math.random())];
    setcolornote(color);
  };

  const now = 100;

  return (
    <div key={index}>
      <Draggable key={taskObj.id} draggableId={`${taskObj.id}`} index={index}>
        {(provided) => (
          <div
            className="box-content"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="box">
              {ShowDetails === true ? (
                <div className="Edit-Del">
                  <button className="edit-btn btn btn-secondary" onClick={() => setModal(true)}>
                    {" "}
                    <CiEdit />{" "}
                  </button>
                  <CloseButton className="close-btn" onClick={handleDelete} style={{ backgroundColor: "none" }} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    HandleHideShow();
                  }}
                ></div>
              )}

              {ShowDetails === true && (
                <div
                  className="background-box"
                  onClick={() => {
                    HandleHideShow();
                  }}
                ></div>
              )}

              <div className="Task-tilte">
                <h3> {taskObj.Name} </h3>
                {ShowDetails === true ? (
                  <div
                    onClick={() => {
                      HandleHideShow();
                    }}
                  ></div>
                ) : (
                  <div
                    className="more"
                    onClick={() => {
                      HandleHideShow();
                    }}
                  >
                    {" "}
                    <BsArrowsAngleExpand className="more" />
                  </div>
                )}
              </div>
              <p> {taskObj.Description} </p>
              <p className="date">
                <FaRegCalendarAlt className="calendar" /> {taskObj.Date}
              </p>
              <ProgressBar variant="info" className="ProgressBar" now={now} style={{ width: "100%" }} />
              <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                {" "}
                <AiFillCaretDown />{" "}
              </Button>
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <div className="note" style={{ backgroundColor: colornote }} onClick={() => handlecolor()}>
                  <div className="header-note">
                    <h5> {taskObj.ListTilte} </h5>
                  </div>
                  <div className="notelist">
                    <div>
                      <textarea style={{ backgroundColor: colornote }} defaultValue={taskObj.AddList}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        )}
      </Draggable>
      <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </div>
  );
};

export default Box;
