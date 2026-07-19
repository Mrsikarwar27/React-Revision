import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyComponent from "./src/components/body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

//react.createElement
// const heading1 = React.createElement("h1",{id:"head"},"this is heading")

/// JSX is html- like syntax not hmtl
// myth jsk is not inside the js .. it is possible with the reactdom
// const headingjsx = <h1 className="head"> Namaste react using JSX </h1>;

//react component

// const  Title = () => <h1>this is jsx using react</h1>

// const HeadingComponent = () => {
//    return (
//     <div>
//         <Title/>
//         {<h1>hwelll</h1>}
//         <h1 className="fnc"> This is functional component</h1>
//     </div>
//    )
// };

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
       {
         path: "/",
         element: <BodyComponent/>
       }, 
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
