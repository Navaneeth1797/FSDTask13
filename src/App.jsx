import React from "react";
import Pricecard from "./components/Pricecard/";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      isuser: true,
      storage: "5 GB",
      isstorage: true,
      publicProject: "Unlimited Public Projects",
      ispublicProject: true,
      communityAccess: "Community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: false,
      subDomain: "Free Subdomain",
      issubDomain: false,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      isuser: true,
      storage: "50GB Storage",
      isstorage: true,
      publicProject: "Unlimited Public Projects",
      ispublicProject: true,
      communityAccess: "Community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      isuser: true,
      storage: "50GB Storage",
      isstorage: true,
      publicProject: "Unlimited Public Projects",
      ispublicProject: true,
      communityAccess: "Community Access",
      iscommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isphoneSupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((element, index) => {
              return <Pricecard data={element} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
