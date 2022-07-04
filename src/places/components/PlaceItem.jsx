import React, { useState, useContext } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Map from "../../shared/components/UIElements/Map";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/Auth-context";
import "./placeItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMap = () => setShowMap(true);

  const closeMap = () => setShowMap(false);

  const showDeleteWarning = () => setShowConfirmModal(true);
  const cancelDeleteWarning = () => setShowConfirmModal(false);

  const confirmDeleteWarning = () => {
    console.log("Deleted");
    setShowConfirmModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarning}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button onClick={cancelDeleteWarning} inverse>
              CANCEL
            </Button>
            <Button onClick={confirmDeleteWarning} danger>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Are you sure you want to proceed and delete this place? Please note
          that once the place has been deleted, it can't be recovered.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button onClick={showDeleteWarning} danger>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
