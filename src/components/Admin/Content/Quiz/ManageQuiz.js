import { useState, useRef } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = (props) => {
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState({ value: "EASY", label: "EASY" });
  const [image, setImage] = useState(null);

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSumitQuiz = async () => {
    if (!name || !description) {
      toast.error("Name/Description are required");
      return;
    }
    let res = await postCreateNewQuiz(name, description, type?.value, image);
    if (res && res.EC === 0) {
      // success
      toast.success(res.EM);
      setName("");
      setDescription("");
      setType({ value: "EASY", label: "EASY" });
      setImage(null);
      // Reset file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      // error
      toast.error(res.EM);
    }
    console.log("res: ", res);
  };
  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <hr />
      <div className="add-new">
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">Add New Quiz</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Quiz Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Your Quiz Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <label>Description</label>
          </div>
          <div className="my-3">
            <Select
              value={type}
              //   onChange={this.handleChange}
              defaultValue={type}
              onChange={setType}
              options={options}
              placeholder={"Quiz Typevent..."}
            />
          </div>
          <div className="more-actions form-group">
            <label className="mb-1">Upload Image</label>
            <input
              ref={fileInputRef}
              type="file"
              className="form-control"
              onChange={(event) => handleChangeFile(event)}
            />
          </div>
          <div className="mt-3">
            <button
              onClick={() => handleSumitQuiz()}
              className="btn btn-warning"
            >
              Save
            </button>
          </div>
        </fieldset>
      </div>
      <div className="list-detail">Table</div>
    </div>
  );
};

export default ManageQuiz;
