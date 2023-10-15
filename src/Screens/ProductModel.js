import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductModal({ product, closeModal }) {
  return (
    <Modal
      isOpen={!!product}
      onRequestClose={closeModal}
      contentLabel="Product Details"
    >
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </Modal>
  );
}

export default ProductModal;
