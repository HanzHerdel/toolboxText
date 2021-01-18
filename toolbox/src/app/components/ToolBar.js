import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { convertText, updateText } from "../store/palidrome/palindrome.actions";

export default function ToolBar(props) {
  const [validForm, setvalidForm] = useState(false);
  const dispatch = useDispatch();

  const textToConvert = useSelector(
    (palindromeReducer) => palindromeReducer.textToConvert
  );

  const handleChage = (e) => {
    updateValid(e);
    dispatch(updateText(e.target.value));
  };

  const updateValid = (e) => {
    const valid = e.currentTarget.checkValidity();
    if (valid !== validForm) setvalidForm(valid);
  };

  const handleSubmit=()=>{
    dispatch(convertText(textToConvert));
  }
  return (
    <Navbar bg="danger" fixed="top">
      <Form inline className="w-100 justify-content-center">
          <div className="d-flex w-100" style={{ maxWidth:600}}>
            <FormControl
              onChange={(e) => handleChage(e)}
              required
              type="text"
              placeholder="Insert Text"
              className="mx-2 my-1 flex-grow-1"
              value={textToConvert}
            />
            <Button onClick={handleSubmit} className="mx-2 my-1 px-4" variant="primary" disabled={!validForm}>
              Send
            </Button>
          </div>
      </Form>
    </Navbar>
  );
}
