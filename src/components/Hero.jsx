import React from 'react';
import { NavLink } from 'react-router-dom';


const Hero = ({ title, breadcrumbs }) => {
  return (
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className={breadcrumbs ? 'container my-5 pt-5 pb-4' : ''}>
        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
        {breadcrumbs && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className={`breadcrumb-item ${breadcrumb.active ? 'text-white active' : ''}`}>
                  {breadcrumb.link ? (
                    <NavLink to={breadcrumb.link}>{breadcrumb.name}</NavLink>
                  ) : (
                    breadcrumb.name
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};


export default Hero;