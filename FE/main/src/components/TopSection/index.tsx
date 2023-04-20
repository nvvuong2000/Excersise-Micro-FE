import React, { useEffect, useState } from "react";

import { mountRemoteComponent } from "@/utils/loadComponent";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";
import axios from "axios";

export interface IDepartment {
  id: number;
  name: string;
  slug: string;
}
const TopSection = () => {
  const heroBannerProps = {
    title: "FRESH FRUIT",
    content: "Vegetable <br/>100% Organic",
    buttonTitle: "SHOP NOW",
    description: "Free Pickup and Delivery Available",
  };

  const [department, setDepartment] = useState<IDepartment[]>([]);

  useEffect(() => {
    const array: IDepartment[] = [];
    axios
      .get("http://localhost:5200/api/rest/product/all_category")
      .then((results) => {
        console.log(results)
        results.data.category
        .map((result: IDepartment) => {
          console.log(result)
          array.push({
            id: result.id,
            name: result.name,
            slug: result.slug,
          });
        });
        setDepartment(array);
      });
  }, []);

  return (
    <section className="hero">
      <div className="row">
        <div className="col-lg-3">
          <CategoryMenu department={department as IDepartment[]}></CategoryMenu>
        </div>
        <div className="col-lg-9">
          <div className="hero__search">
            <Search />

            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>704-768-7449</h5>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="hero__item set-bg">
            {mountRemoteComponent({
              module: "shared",
              component: "HeroBanner",
              props: heroBannerProps,
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
