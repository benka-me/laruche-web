import React from 'react';

export const getAge = (iso: string) =>  {
    const dateold = new Date(iso);
    const datenew = new Date();
    var ynew = datenew.getFullYear();
    var mnew = datenew.getMonth();
    var dnew = datenew.getDate();
    var yold = dateold.getFullYear();
    var mold = dateold.getMonth();
    var dold = dateold.getDate();
    var diff = ynew - yold;
    if(mold > mnew) diff--;
    else
    {
        if(mold === mnew)
        {
            if(dold > dnew) diff--;
        }
    }
    return diff;
};

export const logout = (e: React.MouseEvent, setLogin: (b: boolean) => void) => {
    localStorage.removeItem(process.env.TOKEN_KEY);
    setLogin(false);
};
