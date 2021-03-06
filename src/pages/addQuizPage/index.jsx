import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { cssTest } from "../../quizzes/css_uz";
import { htmlTest } from "../../quizzes/html_uz";
import { javaScriptTest } from "../../quizzes/javaScript_uz";
import { reactTest } from "../../quizzes/react_uz";
import { reduxTest } from "../../quizzes/react_uz";
import axios from "axios";
import { baseLink } from "../../baselink/baselink";

function AddQuizPage() {
  const css = {
    category: "CSS",
    quizPayload: cssTest,
  };

  const html = {
    category: "HTML",
    quizPayload: htmlTest,
  };

  const javaScript = {
    category: "Java_Script",
    quizPayload: javaScriptTest,
  };

  const react = {
    category: "React",
    quizPayload: reactTest,
  };
  const redux = {
    category: "Redux",
    quizPayload: reduxTest,
  };
  console.log(css, cssTest);

  const sendQuiz = (data) => {
    console.log(data);
    axios({
      method: "POST",
      data: data,
      url: `${baseLink}/quiz`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcGFjZV9hY2FkZW15IiwiaWF0IjoxNjMxNzg4MTAzLCJleHAiOjE2NjMzMjQxMDN9.Rs9VPFUNbhgrMnTV-Urtd7Z5E0NJhQc1sMA_NbgmNNsWockKinNo7j-TrGlzl5_Q-HNf4b2fXarbzUx3ZVXk9w",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {/* <h1>
        {html.quizPayload.length} {html.category}
      </h1> */}
      <button onClick={() => sendQuiz(html)}>html</button>
      <button onClick={() => sendQuiz(css)}>css</button>
      <button onClick={() => sendQuiz(javaScript)}>JavaScript</button>
      <button onClick={() => sendQuiz(react)}>React</button>
      <button onClick={() => sendQuiz(redux)}>Redux</button>

      {/* {html.quizPayload.map(({id, question, answer, options }, index) => (
        <React.Fragment key={id}>
          <h3>
            {index + 1}) {question}
          </h3>
          <ul>
            {options.map((value) => (
              <li>{value}</li>
            ))}
            <b>{answer === "" ? "EMPTY" : answer}</b>
          </ul>
        </React.Fragment>
      ))}

      <h1>
        {css.quizPayload.length} {css.category}
      </h1>
      {css.quizPayload.map(({ question, answer, options }, index) => (
        <>
          <h3>
            {index + 1}) {question}
          </h3>
          <ul>
            {options.map((value) => (
              <li>{value}</li>
            ))}
            <b>{answer === "" ? "EMPTY" : answer}</b>
          </ul>
        </>
      ))} */}

      <h1>
        {javaScript.quizPayload.length} {javaScript.category}
      </h1>

      {javaScript.quizPayload.map(({ question, answer, options }, index) => (
        <>
          <h3>
            {index + 1}) {question}
          </h3>
          <ul>
            {options.map((value) => (
                <li>{value}  {value===answer?<b style={{color:"red"}}>true</b>:""}</li>
            ))}
             {/*<b>{options.contains(answer)}</b>*/}
            <b>{answer === "" ? "EMPTY" : answer}</b>
          </ul>
        </>
      ))}

      {/*<h1>*/}
      {/*  {react.quizPayload.length} {react.category}*/}
      {/*</h1>*/}
      {/*{react.quizPayload.map(({ question, answer, options }, index) => (*/}
      {/*  <>*/}
      {/*    <h3>*/}
      {/*      {index + 1}) {question}*/}
      {/*    </h3>*/}
      {/*    <ul>*/}
      {/*      {options.map((value) => (*/}
      {/*        <li>{value}</li>*/}
      {/*      ))}*/}
      {/*      <b style={(answer==="")?{color:'red'}:{}}>{answer === "" ? "EMPTY" : answer}</b>*/}
      {/*    </ul>*/}
      {/*  </>*/}
      ))}
    </Container>
  );
}

export default AddQuizPage;
