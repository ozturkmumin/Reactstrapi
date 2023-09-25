import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
// Blogları idsi ile birlikte burada oluşturdum
function BlogContents() {
  const blogs = [
    {
      id: 1,
      title: "Blog",
      contentImg: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog",
      content: "Content",
    },
    {
      id: 2,
      title: "Blog1",
      contentImg: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog1",
      content: "Content1",
    },
    {
      id: 3,
      title: "Blog2",
      contentImg: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Blog2",
      content: "Content2",
    },
  ];
  const { id } = useParams();

// useparams ile URL i aldım 
  const blog = blogs.find((blog) => blog.id.toString() === id.toString());
// id si denk gelen sayfayı bulmasını sağladım
  return (
    <div>
      <div className="container pt-5">
        <Row>
          <Col lg={8}>
            <div>
              <img className="mw-100 h-25 w-100" src={blog.contentImg} alt={blog.alt} />
            </div>
            <div className="fw-bold">{id}</div>
            <p className="w-100"> {blog.content}</p>
          </Col>
          <Col lg={4} sm={6} className="m-lg-0 m-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog.contentImg} alt={blog.alt} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.cardContent}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BlogContents;
