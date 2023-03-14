import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const Popup = ({ modal, toggle, Save }) => {
  const [TaskTiltle, setTaskTiltle] = useState("");
  const [Description, setDescription] = useState(``);
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

  const handleSaveTask = () => {
    let taskObj = {};
    taskObj["id"] = id;
    taskObj["Name"] = TaskTiltle;
    taskObj[`Description`] = Description;
    taskObj["ListTilte"] = ListTilte;
    taskObj["Date"] = Date;
    taskObj["AddList"] = AddList;
    Save(taskObj);
    setTaskTiltle("");
    setDescription("");
    setListTilte("");
    setDate("");
    setAddList("");
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Todolist</ModalHeader>
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
            <label>List Tilte:</label>
            <input
              type="text"
              placeholder="List Tilte"
              className="form-control "
              value={ListTilte}
              onChange={handleChange3}
              name="ListTilte"
            />
          </div>

          <div className="form-group">
            <label>List Todo:</label>
            <textarea
              rows="5"
              type="text"
              placeholder="List todo"
              className="form-control"
              value={AddList}
              onChange={handleChange2}
              name="AddList"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSaveTask}>
          Submit
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Popup;
