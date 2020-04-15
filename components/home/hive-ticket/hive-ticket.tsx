import React, {FC} from 'react';
import {Hive} from "graph/graphql";

const HiveTicket:FC<{hive: Hive}> = ({hive}) => {
    return <>
        <h3>{hive.Name}</h3>
    </>
};

export default HiveTicket;