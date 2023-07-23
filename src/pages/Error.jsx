import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <h1>
      Error bro go
      <button onClick={() => navigate("/")}><h1><u>back</u></h1></button>
    </h1>
  );
}

export default Error