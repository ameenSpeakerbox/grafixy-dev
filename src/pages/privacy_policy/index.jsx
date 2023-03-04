import React from 'react';
import Layout from '../../components/layout/layout';

const Index = () => {
  const styles = {
    heading: 'font-nunito font-bold text-2xl  tracking-[-2%] text-white ',
    text: 'font-nunito text-lg text-[rgba(255,255,255,0.70)] mt-5 max-w-[905px]',
  };
  return (
    <div className="bg-[#1A0143]">
      <Layout>
        <main className="mt-20 mb-40 grid  gap-12 px-8 sm:mt-40 sm:px-[80px] lg:mt-80 2xl:px-[147px]">
          <div>
            <h1 className={styles.heading}>Privacy Policy</h1>
            <p className={styles.text}>
              At Grafixy, accessible from www.grafixy.io, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Grafixy and how we use it. <br /> <br />
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us. <br /> <br />
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Grafixy. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>Consent</h1>
            <p className={styles.text}>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>Information we collect</h1>
            <p className={styles.text}>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.{' '}
              <br /> <br />
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>How we use your information</h1>
            <p className={styles.text}>
              We use the information we collect in various ways, including to:{' '}
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>Log Files</h1>
            <p className={styles.text}>
              Grafixy follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h1>
            <p className={styles.text}>
              Under the CCPA, among other rights, California consumers have the
              right to: <br /> <br />
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers. <br /> <br />
              Request that a business delete any personal data about the
              consumer that a business has collected. <br />
              <br />
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data. <br />
              <br />
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          {/*  */}
          <div>
            <h1 className={styles.heading}>GDPR Data Protection Rights</h1>
            <p className={styles.text}>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following: The
              right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.{' '}
              <br />
              <br />
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
              <br />
              <br />
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
              <br />
              <br />
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
              <br />
              <br />
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
              <br />
              <br />
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
              <br />
              <br />
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
