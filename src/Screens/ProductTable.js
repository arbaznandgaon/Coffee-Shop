import React from "react";

function ProductTable({ products, onView, onUpdate, onDelete }) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Product Title</th>
          <th>Product Price</th>
          <th>Product Description</th>
          <th>Product Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>
              <button onClick={() => onView(product)}>View</button>
              <button onClick={() => onUpdate(product)}>Update</button>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
