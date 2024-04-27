import React from "react";
import Accordion from "./Accordion";

const Accordions = ({ product }) => {
  return (
    <div className="container">
      <Accordion title="Delivery Fees">
        <strong>Pick up and delivery options: </strong>
        <br />
        <strong>Collection at store:</strong> (1-8 business days) - 0 ILS
        <br />
        <strong>Delivery to the customer's home:</strong> (10 business days) -
        43 ILS <br />
        <strong>Fast delivery: </strong> (0-1 business days) - 58 ILS <br />
        <strong>Delivery to a variety of collection points:</strong> (2-10
        business days) - 25 ILS
      </Accordion>
      <Accordion title="Specification">
        <h5>{product.title}</h5>
        <h6>{product.description}</h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet atque
        quia, ex qui incidunt quidem ullam porro voluptates? Veritatis aut,
        voluptate accusamus quod dolorem corporis facere voluptas fuga quam
        voluptatibus mollitia optio esse libero reiciendis quis culpa
        exercitationem cupiditate? Eaque cumque quia magni, asperiores ab, nobis
        sint sapiente, labore eveniet non facere. Reprehenderit, quos fugit?
        Temporibus dolore vero vel. Deserunt dolores error porro ratione quasi,
        placeat necessitatibus, eius cum excepturi qui distinctio impedit
        nesciunt cumque odit vero quaerat nostrum fugiat. Nisi voluptatem
        repellendus, quaerat a reprehenderit, voluptates, aut ipsum sint magnam
        fugit nobis pariatur. Asperiores temporibus aut ducimus dolore amet.
      </Accordion>
      <Accordion title="Notes For Product">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        aliquam repudiandae vel neque eaque, accusantium ducimus culpa hic
        itaque natus ex eos est harum molestiae sint unde quo dolore dignissimos
        aperiam maiores. Dolore quas, illo enim autem qui illum amet quis
        similique harum quam nam consectetur quidem error nulla voluptatem
        laboriosam iusto itaque aut porro odit vero sapiente deleniti
        consequuntur. Eum quisquam laborum nostrum! Architecto quisquam
        distinctio, excepturi quo sequi doloribus error minima maxime, est autem
        nobis iusto quaerat itaque. Sed a numquam molestiae vero et facere quasi
        nesciunt quos blanditiis, inventore architecto eum saepe recusandae
        excepturi culpa ea? Optio?
      </Accordion>
    </div>
  );
};

export default Accordions;
