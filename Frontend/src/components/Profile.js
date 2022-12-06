import "./Profile.css";
import "bulma/css/bulma.min.css";
import Nav from "./Nav";
import Card from "./Card";
import Propertybar from "./PropertyBar";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { getInvestments, addInvestment, getWallet } from "../util/api";
import InfiniteScroll from 'react-infinite-scroll-component';





function Profile() {
  const [companiesState, setCompanies] = useState(null);
  const [companyToShow, setCompanyToShow] = useState(null);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [data, setData] = useLocalState({}, "data");
  const [wallet, setWallet] = useState(0)
  

  const showModal = (company) => setCompanyToShow(company);
  const hideModal = () => setCompanyToShow(null);


  // sort functions

  const alphasort = () => {
    setCompanies(
      [...companiesState].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const lowsort = () => {
    setCompanies(
      [...companiesState].sort((a, b) => (a.amount > b.amount ? 1 : -1))
    );
  };
  const highsort = () => {
    setCompanies(
      [...companiesState]
        .sort((a, b) => (a.amount > b.amount ? 1 : -1))
        .reverse()
    );
  };

  let sorts = [alphasort,lowsort,highsort]

  
  // API Calls
  useEffect(() => {
    getInvestments(jwt).then(data => setCompanies(data))
    getWallet(jwt,data["id"]).then(result => setWallet(result))
  }, []);
  

  const createInvestment = (e) => {
    addInvestment(jwt)
    setTimeout(() => window.location.reload(true), 200)
  };


  

  return (
    <div className="fullscreen ">
      <Nav wallet={wallet} />
      <div className="columns is-multiline">
        <div className="container column px-3 py-4" id="cardholder">
          <Propertybar
            sorts = {sorts}
            createInvestment={createInvestment}
          />
          
          <div className="py-4 px-5">
            {companiesState &&
            <InfiniteScroll
              dataLength={companiesState.length}
              loader={<h4>Loading...</h4>}
              height={800}
              className=" columns is-multiline is-3-desktop"
            >
              {companiesState.map(function (company) {
                return (
                  <div
                    className="column is-one-fifth"
                    key={company.id}
                    onClick={() => showModal(company)}
                  >
                    <Card company={company} />
                  </div>
                );
              })}
            


            </InfiniteScroll>
            }
          </div>
        </div>
      </div>
      {companyToShow && (
        <Modal
          show={companyToShow}
          company={companyToShow}
          onClose={hideModal}

          
        />
      )}
    </div>
  );
}

export default Profile;
