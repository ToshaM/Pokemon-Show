import React from "react";

import "./FAQ-page.css";

export const FAQPage = () => {
  return (
    <div>
      <h1 className="faq-header">F.A.Q.</h1>
      <h3 className="faq-header">What you can?</h3>
      <h2 className="faq-header">You can...</h2>
      <ul>
        <li className="list-group-item faq-item">
          <p>
            1. While on the main page, you can select any pokemon from the list and
            see detailed information about him. Namely, Name, Listing Number,
            Base Experience, Height and Weight.
          </p>
        </li>
        <li className="list-group-item faq-item">
          <p>
            2. By clicking on the link "Pokemons", a list of Pokemon will appear in
            front of you, where, after selecting a character, a card with
            detailed information will open (name, number in the list, base
            experience, growth and weight). The card will open in place of the
            list.
          </p>
        </li>
        <li className="list-group-item faq-item">
          <p>
            3. On each page you can see a card with a random Pokemon and
            information about him. The Pokemon is refreshed every 5 seconds.
          </p>
        </li>
      </ul>
    </div>
  );
};
