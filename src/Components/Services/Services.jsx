import "./Services.scss";
import ServicesImg from "../../Assets/Images/Teamwork.png";
import HammerIcon from "../../Assets/Icon/Hammer.png";
import Handshake from "../../Assets/Icon/Handshake.png";
import Family from "../../Assets/Icon/Family.png";
import RealEstate from "../../Assets/Icon/RealEstate.png";
import People from "../../Assets/Icon/People.png";
import Tax from "../../Assets/Icon/Home.png";
import Balance from "../../Assets/Icon/BalanceIcon.png";

export default function Services() {
  const ListofServices = [
    {
      Title: "Litigation and Dispute Resolution",
      Img: HammerIcon,
      Details: [
        "Legal representation in court.",
        "Civil, criminal, and commercial litigation.",
        "Mediation and arbitration services.",
      ],
    },
    {
      Title: "Corporate and Business Law",
      Img: Handshake,
      Details: [
        "Drafting and reviewing contracts.",
        "Corporate compliance and governance.",
        "Mergers, acquisitions, and business restructuring.",
      ],
    },
    {
      Title: "Family Law",
      Img: Family,
      Details: [
        "Divorce and child custody.",
        "Prenuptial agreements.",
        "Estate planning and inheritance matters.",
      ],
    },
    {
      Title: "Employment and Labor Law",
      Img: People,
      Details: [
        "Workplace disputes and wrongful termination.",
        "Employment contracts and policies.",
        "Labor union negotiations.",
      ],
    },
    {
      Title: "Intellectual Property Law",
      Img: Tax,
      Details: [
        "Trademark and copyright registration.",
        "IP infringement cases.",
        "Licensing and patent agreements.",
      ],
    },
    {
      Title: "Real Estate and Property Law",
      Img: Tax,
      Details: [
        "Property transactions and contracts.",
        "Land disputes and zoning issues.",
        "Lease agreements and tenant rights.",
      ],
    },

    {
      Title: "Human Rights and Advocacy",
      Img: Balance,
      Details: [
        "Legal aid for marginalized communities..",
        "Protection of fundamental rights.",
        "Representation in public interest litigation.",
      ],
    },
    {
      Title: "Taxation and Financial Law",
      Img: RealEstate,
      Details: [
        "Tax compliance and disputes.",
        "Financial regulations and audits.",
        "Tax planning for individuals and businesses.",
      ],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services__header">
        <div className="services__intro">
          <h3 className="services__title">What We Offer</h3>
          <p className="services__description">
            We provide tailored legal solutions to meet your unique needs,
            ensuring your rights are protected and justice is served.
          </p>
          <button className="services__button">See More</button>
        </div>
        <img
          className="services__image"
          src={ServicesImg}
          alt="Image of Meeting going over tailored legal solutions."
        />
      </div>
      <ul className="services__list">
        {ListofServices.map((item) => (
          <li key={item.Title} className="services__item">
            <div className="services__item-header">
              <img
                className="services__item-icon"
                src={item.Img}
                alt={item.Title}
              />
              <h4 className="services__item-title">{item.Title}</h4>
            </div>
            <ul className="services__details">
              {item.Details.map((detail, index) => (
                <li key={index} className="services__details-item">
                  <p className="services__details-text">{detail}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
