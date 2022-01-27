import React from "react";

const Enabel = () => {
    return (
        <div>
            <div>
                <h2>Enabel Accelerated APY</h2>
            </div>
            <div>
                <label className="swit">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div>
                <p className="swit-p">Select Tier</p>
            </div>
            <div className="time">
                <p className="time-p">Tier 1</p>
            </div>
            <div className="time-e">
                <p>Tier 2</p>
            </div>
            <div className="time-e">
                <p>Tier 3</p>
            </div>
            <div className="time-e">
                <p>Tier 4</p>
            </div>
            <div className="time-e">
                <p>Tier 5</p>
            </div>
            <div>
                <p className="curr">ROI at Current Rates</p>
            </div>
            <div className="ena">
                <p className="ene">0.00USD</p>
            </div>
            <div>
                <p className="ene-p">-0.00CAKE + 0.000000DON</p>
            </div>
        </div>
    )
}
export default Enabel;