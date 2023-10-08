import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogContents() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { loading, data, error } = useFetch("http://localhost:1337/api/blogs?populate=*");

  useEffect(() => {
    if (!loading && data) {
      // Veri yüklendiğinde, belirtilen ID ile ilgili blogu bulun
      const foundBlog = data.find((blog) => blog.id.toString() === id.toString());
      setBlog(foundBlog);
    }
  }, [loading, data, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <div className="container pt-5">
        <Row>
          <Col lg={8}>
            <div>
              <img
                className="mw-100 h-25 w-100"
                src={`http://localhost:1337${blog.attributes.CoverImg.data[0].attributes.url}`}
                alt={blog.alt}
              />
            </div>
            <div className="fw-bold">{blog.attributes.blogTitle}</div>
            <p className="w-100"> {blog.attributes.blogContent}</p>
          </Col>
          <Col lg={4} sm={6} className="m-lg-0 m-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://localhost:1337${blog.attributes.CoverImg.data[0].attributes.url}`}
                alt={blog.alt}
              />
              <Card.Body>
                <Card.Title>{blog.attributes.blogTitle}</Card.Title>
                <Card.Text>{blog.attributes.blogContent}</Card.Text>
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
