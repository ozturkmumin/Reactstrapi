import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "Blog",
      contentImg:
        "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog",
      content: "Content",
    },
    {
      id: 2,
      title: "Blog1",
      contentImg:
        "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog1",
      content: "Content1",
    },
    {
      id: 3,
      title: "Blog2",
      contentImg:
        "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog2",
      content: "Content2",
    },
  ];


  return (
    <Container className="pt-5">
      <Row className="justify-content-center align-items-center">
        {blogs.map((blog) => (
          <Col lg={4} sm={6} className="m-lg-0 m-3" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={blog.contentImg} alt={blog.alt} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blogs;
