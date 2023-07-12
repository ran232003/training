import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../api.css";
const Input = (props) => {
  const { apiData, copyOfApiData, setCopyOfApiData, setApiData } = props;
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(copyOfApiData);
    const results = copyOfApiData.results.filter((post) => {
      if (e.target.value === "") {
        return copyOfApiData;
      } else {
        return (
          post.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          post.eye_color.toLowerCase().includes(e.target.value.toLowerCase())
        );
      }
    });
    console.log(results);
    setApiData(() => {
      return { ...copyOfApiData, results: results };
    });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              onChange={handleChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Input;
