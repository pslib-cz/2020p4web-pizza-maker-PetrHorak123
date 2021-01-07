import React from "react";

export const DataContext = React.createContext([
    {name: "pork cut", category: "meat"}, 
    {name: "artichoke", category: "vegetables"},
    {name: "anchovy", category: "fish"},
    {name: "peperoni", category: "meat"},
]);