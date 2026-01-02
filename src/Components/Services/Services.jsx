import "./Services.scss";
import { Link } from "react-router-dom";
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
      Title: "Property Law",
      Img: Handshake,
      Details: [
        "Estate Planning: Wills and Trusts",
        "Deeds",
        "Landlord Tenant Disputes",
        "Probate",
      ],
    },
    {
      Title: "Business Law",
      Img: HammerIcon,
      Details: [
        "Contract Drafting and Review",
        "Business Formation",
        "Mergers, Acquisitions, and Corporate Restructuring",
        "Trademark and Copyright",
      ],
    },
    {
      Title: "Personal Injury",
      Img: People,
      Details: ["Car Accident", "Slip and Fall", "Nursing Home Negligence"],
    },
    {
      Title: "Immigration Law",
      Img: Balance,
      Details: [
        "Citizenships And Green Card Applications",
        "Naturalization",
        "Asylum and Removal Defense",
      ],
    },
    {
      Title: "Family Law",
      Img: Family,
      Details: [
        "Prenuptial and Postnuptial Agreements",
        "Divorce and Child Custody",
        "Restraining Order Matters",
      ],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services__header">
        <div className="services__intro">
          <h2 className="services__title">What We Offer</h2>
          <p className="services__description">
            We provide tailored legal solutions to meet your unique needs,
            ensuring your rights are protected and justice is served.
          </p>
          <Link to="/contact" className="services__button">
            See More
          </Link>
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
