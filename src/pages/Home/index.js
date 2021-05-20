import React from "react";
import "./styles.css";
import Card from "../../components/Card";
function Home() {
  return (
    <>
      <div className="container-home">
        <h1>Bem-vindo ao Food Services</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <Card />
      </div>
    </>
  );
}

export default Home;
