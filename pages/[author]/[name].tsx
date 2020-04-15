import React, { useEffect, useContext } from "react";
import { useRouter } from 'next/router'
import BeePage from "components/bee/bee";
import {LoadingPage} from "components/class/loading/loading";
import { Namespace } from "types/types";

export default () => {
    const { author, name } = useRouter().query;
    if (!author || !name) return <LoadingPage/>;

    return <BeePage namespace={new Namespace(author, name)} />
}