import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Page ({currentPage}){
    const showPage = () => {
        switch (currentPage) {
          case "About":
            return <About />;
          case "Portfolio":
            return <Portfolio />;
          case "Contact":
            return <Contact />;
          case "Resume":
            return <Resume />;
    
          default:
            return <About />;
        }
      };

      return (
        <section>
            <PageContent>
                {showPage()}
            </PageContent>
        </section>
      )
}
export default Page;