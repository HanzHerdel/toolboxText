import React from "react";

import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export default function Results(props) {
  const results = useSelector((palindromeReducer) => palindromeReducer.results);

  return (
    <Card
      className="w-75 mt-40"
      style={{ margin: "10% auto", height: 500, overflowY: "auto" }}
    >
      <h2 className="pt-5 pl-5 text-muted">Results:</h2>
      {results.map((result, index) => (
        <Card
          key={index}
          className="w-50 p-2 m-8 border-4"
          style={{
            margin: "4px auto",
            borderWidth: "3px",
          }}
        >
          {result.text}
          {result.palindrome ? (
            <p
              className="font-italic position-absolute"
              style={{
                right: 4,
                bottom: 0,
                marginBottom: 0,
                fontSize: ".7rem",
              }}
            >
              Palindrome
            </p>
          ) : null}
        </Card>
      ))}
    </Card>
  );
}
