import Nav from "./Nav";
import { useLocalState } from "../util/useLocalStorage";
import { changeFunds, getWallet } from "../util/api";
import { useState, useEffect } from "react";



const Account = () => {
  const [data, setData] = useLocalState({}, "data");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [wallet, setWallet] = useState(0);
  const [inputVal, setInputVal] = useState("")

  

  useEffect(() => {
    getWallet(jwt,data["id"]).then(result => setWallet(result))
  }, [wallet])


  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(changeFunds(jwt, inputVal, data["id"], "add"), 1000);
    setWallet("")
  };

  function onChangeTagInput(e) {
    setInputVal(e.target.value.replace(/[^\d.]/ig, ""));
    console.log(inputVal)
}

  return (
    <div>
      <Nav wallet={wallet} />
      <section className="hero fullscreen is-fullheight">
        <div className="hero-body">
          <div className="container">
            <strong className="is-size-1">Add Funds</strong>
            <input
              className="input is-medium is-info"
              value={inputVal}
              name="money"
              type="text"
              pattern="[0-9.]+"
              placeholder="$1000"
              onChange={(e) => onChangeTagInput(e)}
            />
            <button className="button is-link mt-1" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
