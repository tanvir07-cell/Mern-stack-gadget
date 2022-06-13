import React from "react";
import { Button, Form } from "react-bootstrap";

const UploadProducts = () => {
  return (
    <div>
      <h2 className="text-center">Upload Product</h2>
      <div className="w-50 mx-auto mt-5 form p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadProducts;
