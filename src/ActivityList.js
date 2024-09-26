import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

/*
TODO: Complete ActivityList
TIP: Use the map higher order function:
    {activities.map((activity, index) => (
       <Activity key={index} {...activity} />
    ))}
*/

function ActivityList({ activities = [] }) {
    const activityList = activities.map(({ time, description }, index) => (
        <Activity key={index} time={time} description={description} />
    ));
    if (!(activities && activities.length)) {
        return null;
    }
    return <ul className="activity-list">
        {activityList}
    </ul>;
}

export default ActivityList;
