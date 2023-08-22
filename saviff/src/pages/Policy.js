import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Saviff-PrivacyPolicy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>**Privacy Policy**

Protecting your privacy is paramount at <b>SAVIFF</b>. We collect and utilize your personal data, such as contact and payment info, to enhance our rental services. Rest assured, your data's security is a priority, and we don't share it for marketing purposes. Our site uses cookies for a better experience, and you can adjust your browser settings accordingly. We don't knowingly collect data from children. You can access, update, or delete your info, and unsubscribe from marketing. We may update our policy periodically. By using <b>SAVIFF</b>, you agree to this policy.
<br />
Last updated: 22/08/2023
 <br/>
 <br/>
 Founder:
 <b>SAVIFF</b></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;