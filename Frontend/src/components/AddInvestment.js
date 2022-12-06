import { useState } from "react";
import "./Profile.css";
import { useLocalState } from "../util/useLocalStorage";


const AddInv = (props) => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  

  

  


  const {invname, ticker, description} = props.newInvestment


  return (
    <div className="column is-2" id="createinvestment">
      <div className="box">
        <h1 className="title ml-6">Create Investment</h1>
        <form>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="control">
              <input className="input" name="invname" value={invname} onChange={props.changeHandler} required/>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Ticker</label>
            </div>
            <div className="control">
              <input className="input" name="ticker" value={ticker} onChange={props.changeHandler} required />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Description</label>
            </div>
            <div className="control">
              <input className="input" name="description" value={description} onChange={props.changeHandler} required/>
            </div>
          </div>
          <div className="field is-grouped is-justify-content-center">
            <div className="control">
              <button className="button is-link" onClick={props.createInvestment}>Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light" onClick={props.addInvestment}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInv;
