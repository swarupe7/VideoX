import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../socket/SocketProvider";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    
    <Container style={{paddingTop:'20px'}}>
     
    <Form onSubmit={handleSubmitForm}>
    <Form.Group className="mb-3  col-xs-4" controlId="formBasicEmail">
      <Form.Label  htmlFor="email">Email address</Form.Label>
      <Form.Control type="email"  id="email" className="col-xs-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  htmlFor="room">Room No</Form.Label>
      <Form.Control  type="text" id="room"
           value={room}
         onChange={(e) => setRoom(e.target.value)} placeholder="Room Number" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  
  );
};

export default LobbyScreen;