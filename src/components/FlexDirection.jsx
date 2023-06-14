import React from "react";
import FlexColumn from "./FlexColumn";
import FlexRow from "./FlexRow";

const FlexDirection = () => {
    return (
        <>
        <h2 class="sectionTitle">flex-direction</h2>
        <div id="flexDirection">
            
            <FlexRow/>
            <FlexColumn/>
        </div>
        </>
    )
}

export default FlexDirection;