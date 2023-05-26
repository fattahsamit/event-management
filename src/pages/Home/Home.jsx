/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

