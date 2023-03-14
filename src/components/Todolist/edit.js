import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [TaskTiltle, setTaskTiltle] = useState("");
  const [Description, setDescription] = useState("");
  const [ListTilte, setListTilte] = useState("");
  const [Date, setDate] = useState("");
  const [AddList, setAddList] = useState("");
  const [id, setid] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "TaskTilte") {
      setTaskTiltle(value);
      setid(uuidv4());
    } else {
      setDescription(value);
      setid(uuidv4());
    }
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    if (name === "AddList") {
      setAddList(value);
      setid(uuidv4());
    }
  };

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    if (name === "Date") {
      setDate(value);
      setid(uuidv4());
    } else {
      setListTilte(value);
      setid(uuidv4());
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = TaskTiltle;
    tempObj["Description"] = Description;
    tempObj["Date"] = Date;
    tempObj["ListTilte"] = ListTilte;
    tempObj["AddList"] = AddList;
    tempObj["id"] = id;

    updateTask(tempObj);
  };

  useEffect(() => {
    setTaskTiltle(taskObj.Name);
    setDescription(taskObj.Description);
    setDate(taskObj.Date);
    setListTilte(taskObj.ListTilte);
    setAddList(taskObj.AddList);
  }, [taskObj]);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Tilte:</label>
            <input
              type="text"
              placeholder="Task Tilte"
              className="form-control "
              value={TaskTiltle}
              onChange={handleChange}
              name="TaskTilte"
            />
          </div>
          <div className="form-group">
            <label>More Description:</label>
            <textarea
              rows="3"
              type="text"
              placeholder="Description"
              className="form-control"
              value={Description}
              onChange={handleChange}
              name="Drescription"
            />
          </div>
          <div className="form-group">
            <label>Datetime Picker: </label>
            <input type="date" className="form-control " value={Date} onChange={handleChange3} name="Date" />
          </div>
          <div className="form-group">
            <label>ListTilte Note:</label>
            <input
              type="text"
              placeholder="ListTilte note"
              className="form-control "
              value={ListTilte}
              onChange={handleChange3}
              name="ListTilte"
            />
          </div>
          <div className="form-group">
            <label>Todo ListTilte:</label>
            <textarea
              rows="5"
              type="text"
              placeholder="TodoList"
              className="form-control"
              value={AddList}
              onChange={handleChange2}
              name="AddList"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
