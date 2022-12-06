import { changeFundstoInvestment ,changeFunds } from "../util/api";
import { useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
const InvestInput = (props) => {
    const [inputVal, setInputVal] = useState("")
    const [data, setData] = useLocalState({}, "data");
    const [jwt, setJwt] = useLocalState("", "jwt");


    const handleSubmitInvest = (e) => {
        e.preventDefault()

        changeFunds(jwt, inputVal, data["id"], "subtract")
        changeFundstoInvestment(jwt, inputVal, props.company.id, "add")
        setTimeout(() => window.location.reload(true), 200)
    }

    const handleSubmitDivest = (e) => {

        if(props.company.invested < inputVal){
            alert("You are divesting more than is in the investment!")
            return
        }

        e.preventDefault()

        changeFunds(jwt, inputVal, data["id"], "add")
        changeFundstoInvestment(jwt, inputVal, props.company.id, "subtract")
        setTimeout(() => window.location.reload(true), 200)
    }

    function onChangeTagInput(e) {
        setInputVal(e.target.value.replace(/[^\d.]/ig, ""));
    }

    return (
        <>
        <label className="label">Amount to Change</label>
            <div className="control">
              <input className="input" type="investment" onChange={onChangeTagInput} placeholder="$100" value={inputVal} id="investinput"/>
              <button className="button is-primary ml-1" onClick={handleSubmitInvest}>Invest</button>
              {props.company.invested > 0 && <button className="button is-danger ml-1" onClick={handleSubmitDivest}>Divest</button>}
            </div>
        </>
    )

}

export default InvestInput;