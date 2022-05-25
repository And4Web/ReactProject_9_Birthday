import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, birthday } = person;
        return (
          <article key={id}>
            <img src={image} />
            <div>
              <h3>{name}</h3>
              <p>{birthday}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
