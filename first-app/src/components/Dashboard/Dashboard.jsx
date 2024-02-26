import React from "react";
import "./Dashboard.css"

export default function Dashboard() {
    return (
        <div className="dashboardContainer">
            <h2 className="title">Dashboard</h2>
            <div className="timeOfEvaluation">
                <p>Last 24 hours</p>
                <p>Last Weeks</p>
                <p>Last months</p>
                <p>Last Years</p>
            </div>
            <div className="stats">
                <div className="netIncome box">
                    <div className="insider">
                        <div className="insiderTitle">
                            <p>Net Income</p>
                            <div>...</div>
                        </div>
                        <hr />
                        <p className="number">
                            $20.178.00
                        </p>
                    </div>
                </div>
                <div className="averageOrderValue box">
                <div className="insider">
                        <div className="insiderTitle">
                            <p>Net Income</p>
                            <div>...</div>
                        </div>
                        <hr />
                        <p className="number">
                            $896.00
                        </p>
                    </div>
                </div>
                <div className="orders box">
                <div className="insider">
                        <div className="insiderTitle">
                            <p>Net Income</p>
                            <div>...</div>
                        </div>
                        <hr />
                        <p className="number">
                            7563
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}