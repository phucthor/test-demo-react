import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaFolderPlus } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCreateNewUser } from "../../../services/apiServices";
const ModalCreateUser = (props) => {

  const { show, setShow } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
      console.log("handleUploadImage", e.target.files[0]);
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async() => {
    // validate input fields

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email format");
      return;
    }
    if (!password || password.length < 6) {
      toast.error("Invalid password");
      return;
    }
    // call APIs

    let data = await postCreateNewUser(email, password, username, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUsers(); // Refresh the user list after creation
      props.setCurrentPage(1); // Reset to the first page after deletion
      await props.fetchListUsersWithPaginate(1); // Refresh the user list after deletion
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
    
  }

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" 
                      onChange={(e) => setRole(e.target.value)} 
                      value={role}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="label-upload">
                <FaFolderPlus />
                Upload File Image
              </label>
              <input 
                type="file" 
                id="label-upload" 
                hidden
                onChange={(e) => handleUploadImage(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? 
              (
                <img src={previewImage} alt="Preview" />
              )
              : (
                <span>Preview Image</span>
              )}
              {/* <img
                src="https://lh3.googleusercontent.com/pw/AP1GczNIlwEYH14XH4JvPiHTfiliDzb_RYBOwl7GXIUe7fatBYZB8pSYPMqVi4b66KTFHZ31irlkrxy5I8e-DuurwqjQHwX99Q7GKPm_5LqIsrdwoVir7iVEASIQ28jMQFI348KZuLvBvc1-okwdR5BQs8LW=w1086-h1229-s-no-gm?authuser=0"
                alt="Preview"
              /> */}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
