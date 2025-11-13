import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Landing.scss";
import Hero from "../../Components/Hero/Hero";

export default function Landing() {
  const ListofServices = [
    {
      Title: "Litigation and Dispute Resolution",
      Details: [
        "Legal representation in court.",
        "Civil, criminal, and commercial litigation.",
        "Mediation and arbitration services.",
      ],
    },
    {
      Title: "Corporate and Business Law",
      Details: [
        "Drafting and reviewing contracts.",
        "Corporate compliance and governance.",
        "Mergers, acquisitions, and business restructuring.",
      ],
    },
    {
      Title: "Family Law",
      Details: [
        "Divorce and child custody.",
        "Prenuptial agreements.",
        "Estate planning and inheritance matters.",
      ],
    },
    {
      Title: "Employment and Labor Law",
      Details: [
        "Workplace disputes and wrongful termination.",
        "Employment contracts and policies.",
        "Labor union negotiations.",
      ],
    },
    {
      Title: "Intellectual Property Law",
      Details: [
        "Trademark and copyright registration.",
        "IP infringement cases.",
        "Licensing and patent agreements.",
      ],
    },
    {
      Title: "Real Estate and Property Law",
      Details: [
        "Property transactions and contracts.",
        "Land disputes and zoning issues.",
        "Lease agreements and tenant rights.",
      ],
    },
  ];
  return (
    <div className="landing">
      <Nav />
      <Hero />

      <section className="services">
        <div>
          <img />
          <div>
            <h3>What We Offer</h3>
            <p>
              WeWe provide tailored legal solutions to meet your unique needs,
              ensuring your rights are protected and justice is served.
            </p>
            <button>See More</button>
          </div>
        </div>
        <ul>
          <li>
            <div>
              <img />
              <h4>title</h4>
            </div>
            <ul>
              <li></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
