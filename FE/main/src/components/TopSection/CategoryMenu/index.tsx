import React, { FC } from "react";
import { IDepartment } from "..";
import { Link } from "react-router-dom";
type Props = {
  department: IDepartment[];
};

const CategoryMemu: FC<Props> = ({ department }: Props): JSX.Element => {
  const onMenuClick = () => {
    $(".hero__categories ul").slideToggle(400);
  };

  return (
    <div className="hero__categories">
      <div className="hero__categories__all" onClick={onMenuClick}>
        <i className="fa fa-bars" />
        <span>All Departments</span>
      </div>
      <ul>
        {department &&
          department.map((item: IDepartment, index: number) => {
            return (
              <li key={index}>
                <Link to={`/shop?category=${item.id}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default CategoryMemu;
