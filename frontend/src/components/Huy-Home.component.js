import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const Listbook = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const responseData = await axios.get('http://localhost:5000/books/');
      setData(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {data.map((book) => (
        <Col key={book._id} xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card
            cover={<img alt={book.name} src={`http://localhost:5000/${book.image}`} style={{ height: 200, objectFit: 'cover' }} />}
            title={book.name}
          >
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Listbook;
