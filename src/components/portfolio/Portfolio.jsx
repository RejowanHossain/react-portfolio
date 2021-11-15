import { ListItem } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./portfolio.scss";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      content: "Featured",
    },
    {
      id: "webapps",
      content: "Web Apps",
    },
    {
      id: "mobileapps",
      content: "Mobile Apps",
    },
    {
      id: "design",
      content: "Design",
    },
    {
      id: "branding",
      content: "Branding",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "webapps":
        setData(webPortfolio);
        break;

      case "mobileapps":
        setData(mobilePortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;

      case "branding":
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => {
            return (
              <li
                className={
                  selected === item.id
                    ? "portfoliolist active"
                    : "portfoliolist"
                }
                onClick={() => setSelected(item.id)}
              >
                {item.content}
              </li>
            );
          })}
        </ul>
        <div className="container">
          {data.map((d) => {
            return (
              <div className="item">
                <img src={d.img} alt={d.title} />
                <h3>{d.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
