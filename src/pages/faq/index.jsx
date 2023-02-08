import React from "react";
import Layout from "../../components/layout/layout";
import TypoFAQ from "../../ui/TypoFAQ";

const index = () => {
  const classes = {
    subHeading:
      "font-nunito 2xl:text-[30px] lg:text-[28px] sm:text-2xl text-xl font-bold text-white 2xl:leading-10 leading-[24px] 2xl:mb-[10px] lg:mb-[9px] sm:mb-[8px] mb-[7px]",
    ans: "2xl:text-2xl lg:text-xl sm:text-lg text-base font-semibold font-nunito text-[rgba(255,255,255,0.7)] lg:w-[60%]",
    listMain: "list-disc ml-8 pl-8",
    subMain: "grid gap-10",
  };
  return (
    <Layout>
      <div className="w-full lg:pt-[312px] sm:pt-36 pt-11  bg-[#1A0143] flex flex-col 2xl:pl-[147px] lg:py-[140px] sm:px-[80px] px-8   h-full py-[120px]">
        <h1 className="font-medium 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl leading-none text-[#D5BAFF]">
          A perfect fit for <br />
          <span className="text-white">agencies</span> &{" "}
          <span className="text-white">brands</span>
        </h1>
        <p className="font-semibold sm:text-2xl text-lg text-white font-nunito lg:w-[45%] mt-5 mb-16">
          Invite team members and clients to help you make and manage designs at
          no extra cost. Easy integration into slack and microsoft teams.
        </p>
        <div className="grid w-full 2xl:gap-24 lg:gap-20 sm:gap-16 gap-14">
          <div className="grid gap-5">
            <h1 className="font-bold 2xl:text-3xl lg:text-2xl sm:text-xl text-2xl leading-none text-white 2xl:mb-[30px] lg:mb-7 sm:mb-6 mb-5 uppercase ">
              GRAFIXY FAQ’S
            </h1>
            <div className={classes.subMain}>
              <TypoFAQ
                question="Which countries does Grafixy serve?"
                ans={
                  <p className="font-nunito">
                    Grafixy likes to serve clients around the Globe. Our team
                    works remotely and gets your design works done wherever you
                    are at your convenience.
                  </p>
                }
              />

              <TypoFAQ
                question="Can I get discounts if I get multiple subscriptions?"
                ans="Please connect with a Grafixy Team Member on the live chat to know more about discounts while in multiple subscriptions."
              />
              <TypoFAQ
                question="How many tasks will Grafixy team works on each day"
                ans={
                  <p className="font-nunito">
                    Our Grafixy team will work on 2 tasks in progress for you in
                    our working time and they will allocate 8 Hours in each
                    business day to complete your requests
                    <br />
                    <br />
                    Now if you have more tasks to complete in short time, you
                    can add additional Grafixy subscriptions <br /> As our team
                    completes the tasks, you will see the work status in Trello
                    board from “In Progress” to “In Review”.
                  </p>
                }
              />
              <TypoFAQ
                question="What’s included with my monthly subscription fee?"
                ans="Grafixy subscription allows you to get features that will help you to fulfil your design requests which includes all the designs you need. We provide designs from print and digital designs for your day to day marketing to custom illustrations, landing page designs and posters for unique campaigns. Grafixy subscription is enough to handle everything you need."
              />
              <TypoFAQ
                question="If I have more than one subscription, will I get faster turnarounds ?"
                ans="We work on 2 tasks at the same time for one subscription. If you have 2 subscriptions, we will work on 4 tasks at a time for 16 hours in a business day."
              />
              <TypoFAQ
                question="What are the Grafixy’s business hours?"
                ans={
                  <p className="font-nunito">
                    We are offering our service to GCC countries and India.
                    <br />
                    <br />
                    Saudi Arabia: 8.30AM to 5.30PM AST <br />
                    India : 9.00AM to 06.00PM IST <br />
                    If your country isn't listed above, no worries! You will be
                    assigned to a team which offers the best coverage for you.{" "}
                    <br />
                    You can reach us out from every Monday to Saturday via mail
                    and chat.
                  </p>
                }
              />
              <TypoFAQ
                question="I need designs on time. What should I do?"
                ans="We can work for 2 tasks taking 8 hours in aI business day, So if
            you can specify the time for delivering the designs at the time
            of task allocation. We will be able to deliver it on time."
              />
              <TypoFAQ
                question="Who works on my requests?"
                ans={
                  <p className="font-nunito">
                    Your team is made of 1 Project manager and 2 designers. The
                    Project manager reviews your requests and assigns them to
                    these designers. When a request is completed, we then move
                    on to your next request. <br />
                    If the priority of your requests is to be changed, you can
                    let your project manager know. They will undertake the
                    requests as per your convenience.
                  </p>
                }
              />
              <TypoFAQ
                question="What details should my design request include?"
                ans="We like to know your design brief for the best results: Size,
            orientation. Format, preferred colors, inspiration designs and
            other references. The more descriptive you can be, the fewer
            revisions will be required."
              />
              <TypoFAQ
                question="What details should my design request include?"
                ans="We like to know your design brief for the best results: Size,
            orientation. Format, preferred colors, inspiration designs and
            other references. The more descriptive you can be, the fewer
            revisions will be required."
              />
              <TypoFAQ
                question={"How do I submit and manage my requests?"}
                ans="There are two ways you can make requests - through email or through our work management software Trello."
              />
              <TypoFAQ
                question="How do I get revisions done?"
                ans="Our team will take care of your design requests from the initial stage to final design. You have to let us know the details on the completed tasks of the revision required via mail or Trello board.
            "
              />
              <TypoFAQ
                question="Is there a contract I have to sign?"
                ans="There are no contracts required. Our service is delivered on a monthly basis on subscription."
              />
              <TypoFAQ
                question="What is grafixy for? (about)"
                ans={
                  <p className="font-nunito">
                    We design for : <br />
                    Print companies <br />
                    Ecommerce and retail shops <br />
                    Marketers <br />
                    Not for profits <br />
                    Industries <br />
                    Service centres <br />
                    Restaurants <br />
                    Educational Institutions <br />
                    Real Estate Agents <br />
                    Marketing Agencies <br />
                    Social media managers <br />
                    Business Development Managers <br /> <br />
                    Grafixy is for Startups, SME”s, marketers, Creative
                    agencies, freelancers, entrepreneurs - who need
                    cost-effective, high graphic design services. With us, you
                    will feel like you have an in-house designer with a
                    convenient budget.
                  </p>
                }
              />
              <TypoFAQ
                question="What’s unlimited?"
                ans={
                  <p className="font-nunito">
                    Grafixy’s unlimited graphic design service includes
                    unlimited requests and unlimited revisions. This means that
                    you can make many requests as you would like and we will
                    work to give the best design. Once you submit your requests,
                    your dedicated project manager will review and ensure that
                    we have all the necessary details before assigning it to the
                    team. <br />
                    When a request is completed, we then move on to your next
                    request. <br />
                    If the priority of your requests is to be changed, you can
                    let your project manager know. They will undertake the
                    requests as per your convenience. <br />
                    We work on your requests on a first in first out basis.
                    These requests will be there in the designers stack in the
                    order that they received. Designing team then works on
                    delivering them. <br />
                    As we work together and get to know your brand and vision
                    better, the review and revision process will get faster and
                    faster. So you will be able to get an increasing number of
                    design requests completed and you only have to pay our flat
                    monthly fee.
                  </p>
                }
              />
              <TypoFAQ
                question="What is Grafixy?"
                ans={
                  <p className="font-nunito">
                    Grafixy is a subscription-based unlimited design service
                    offering unlimited graphic design services. Through us,
                    anyone who needs help with design can work with a dedicated
                    Design Team to make and manage all of their design projects
                    in one place. <br /> This service is offered for a flat fee
                    on a month to month basis making custom designs in an
                    affordable and flexible way. We serve clients from Saudi
                    Arabia, UAE and India.
                  </p>
                }
              />
              <TypoFAQ
                question="Can I resell any of  the designs Grafixy creates for me?"
                ans="Yes, Please be sure to let your project manager know when making your design request for reselling requirements, so we can make sure that your design only includes elements that are appropriate and you will have full rights to sell your designs. In creating these designs there will be limitations using photos and other stock elements or you will have to give us your licensed images and other information for a complete reselling designs.
            "
              />
              <TypoFAQ
                question="Keeping things confidential"
                ans="We never disclose details about our clients. We do however share some of the designs we create for you in our portfolio. If you'd prefer not to have your designs included in our samples, please do let us know via our live chat at www.grafixy.io or via email"
              />
              <TypoFAQ
                question="Who owns the rights to the designs created by grafixy?"
                ans={
                  <p className="font-nunito">
                    You will have the rights to all the designs created by
                    grafixy for you during your paid subscription. <br />
                    If you would like to resell any of the designs, please be
                    sure to let your Project Manager know when making your
                    design request. Your team will then create your design from
                    scratch, so that you have full rights to sell your design.{" "}
                    <br />
                    For all of your other design requests, where you'll be the
                    end-user, and you will not be reselling your design, your
                    team will either create the design from scratch and/or use
                    stock elements or photos, as needed to meet the requirements
                    of your brief. Just remember, we double-check every element
                    and stock photo we use, to make sure you’re granted the
                    licences to use them as the end-user. And we are assuming
                    materials you provide to us are licensed and owned by you.
                    If you do happen to send grafixy unlicensed materials to
                    use, remember we are not held liable for the rights of the
                    final design.
                  </p>
                }
              />
              <TypoFAQ
                question="Do you have different tiers of service?"
                ans={
                  <p className="font-nunito">
                    At grafixy we aim to keep things simple. That's why we have
                    one graphic design subscription - grafixy Graphics - and one
                    video design subscription - grafixy Video. And one
                    subscription which combines both - grafixy Graphics+Video.{" "}
                    <br />
                    Whichever subscription you choose, start with a free trial
                    and invite as many team members as you'd like to help you
                    make design requests. You won't pay any extra premiums for
                    custom illustrations, landing pages, or GIFs with a grafixy
                    Graphics subscription. And no extra fees for custom design
                    and animation with a grafixy Video subscription. <br />
                    You get it all with your flat monthly fee. <br />
                    <br />
                    Will there be any hidden fees? There are no hidden fees at
                    all. You will only pay the flat fee on a monthly basis. All
                    taxes and other fees are included in the flat fee.
                  </p>
                }
              />
              <TypoFAQ
                question="Which method of payment can I use?"
                ans="We do not accept cash, cheques, money transfers, or Paypal as methods of payment. At the moment we only accept credit cards. Feel free to contact us on our live chat at www.grafixy.io if you have any questions about payments."
              />
              <TypoFAQ
                question="Am I in a long-term contract with you?"
                ans="No. We offer a monthly subscription so that at any time you wish to cancel, you can do so hassle-free."
              />
              <TypoFAQ
                question="What does my billing cycle look like and when will I be billed?"
                ans="We maintain a 30-day cycle for billing. As long as you maintain an active subscription, you will be billed on a recurring basis, on the same day that your full subscription began. If you want more information on this, or if you wish to clarify any details, please reach out via our live chat at www.grafixy.io."
              />
              <TypoFAQ
                question="Why is my billing on a monthly basis?"
                ans="grafixy has a subscription model, which includes month-to-month billing. So when you have an active subscription, you'll receive a monthly bill. In order for you to make and manage your design requests on an ongoing basis, we require you to have an active subscription. If you have any concerns about your billing, please contact us on our live chat at www.grafixy.io.
            "
              />
              <TypoFAQ
                question="How hard is it to cancel the subscription?"
                ans={
                  <p className="font-nunito">
                    Not hard at all. We keep things simple at grafixy. No
                    documentation or extensive process. You can cancel at any
                    point in time. Just log in to your grafixy account, and you
                    can cancel with just a few clicks. Need a hand with this? No
                    worries. You can request assistance via the live chat at
                    www.grafixy.io. You can also request assistance from your
                    dedicated Project Manager. There is only one thing that we
                    will ask: “What could we have done better?” We ask, because
                    we value your feedback. Just need a temporary break? But
                    still want access to your Trello board, to remain assigned
                    to the same dedicated design team, and to lock in the
                    existing subscription price regardless of service updates?
                    Consider{" "}
                    <a
                      href="https://www.kimp.io/allfaq/can-i-pause-my-account-if-i-dont-have-a-lot-of-requests-to-make/"
                      className="underline"
                    >
                      pausing your subscription.
                    </a>
                  </p>
                }
              />
              <TypoFAQ
                question="Can I pause my account if I don't have a lot of requests to make?"
                ans={
                  <p className="font-nunito">
                    Yes, you can! We get it. Workflows change and you don't
                    always need to have an active subscription. But at the same
                    time, you might still need access to your Trello board.{" "}
                    <br />
                    And if you've gotten into a really good groove with your
                    design team, you may want to make sure that they're still
                    going to be matched with them when you resume your
                    subscription. <br />
                    To address all of this we've introduced the "Pause Your
                    Subscription" feature for a flat monthly fee of $18.99. This
                    allows you to pause your account as of the end of the
                    current subscription period so that there is no
                    auto-renewal. And it allows you to enjoy these benefits:{" "}
                    <br />
                    <ul className={classes.listMain}>
                      <li>
                        Securing your current subscription fee, regardless of
                        any changes to grafixy pricing.
                      </li>
                      <li>
                        Having ongoing access to your Trello board, and all of
                        your design files.
                      </li>
                      <li>
                        Working with the same Dedicated Design Team when you
                        resume.
                      </li>
                      <li>
                        Making the most of your subscription by resuming when
                        you have more design requests.
                      </li>
                    </ul>
                    To submit a request to pause your subscription, simply{" "}
                    <a href="https://www.kimp.io/my-account/">
                      log into your account
                    </a>{" "}
                    and submit a request. To request to resume your
                    subscription, log into your account and submit a request.
                  </p>
                }
              />
              <TypoFAQ
                question="How can I cancel my subscription?"
                ans="You can simply log in to your grafixy account at www.grafixy.io and cancel at any point in time with just a few clicks. You can also request assistance from your dedicated Project Manager, or via our live chat at www.grafixy.io. There is only one thing that we will ask: “What could we have done better?” We ask, because we value your feedback.
            "
              />
              <TypoFAQ
                question="Can I get a refund if I haven't used my account recently?"
                ans="We do understand that your workflow will change from time to time, and this is why we make it possible for you to cancel at any time. As grafixy is a monthly subscription service, and we provide the opportunity to cancel your subscription at any point, we do not offer refunds due to inactivity"
              />
              <TypoFAQ
                question="What kind of designs can grafixy create?"
                ans={
                  <p className="font-nunito">
                    grafixy Graphics: <br />
                    <ul className={classes.listMain}>
                      <li>Amazon Graphics</li>
                      <li>Background Removal</li>
                      <li>Billboards</li>
                      <li>Blog Images</li>
                      <li>Book Covers</li>
                      <li>
                        Book Layouts (limited to 2-3 pages during the trial,
                        depending on the amount of content)
                      </li>
                      <li>
                        Booklets (limited to 2-3 pages during the trial,
                        depending on the amount of content)
                      </li>
                      <li>
                        Brand Mascot or Brand Character Designs (not included
                        during the trial)
                      </li>
                      <li>Brochures</li>
                      <li>Business Cards</li>
                      <li>
                        Business Reports (limited to 2-3 pages during the trial,
                        depending on the amount of content)
                      </li>
                      <li>
                        Company Profiles (limited to 2-3 pages during the trial,
                        depending on the amount of content)
                      </li>
                      <li>Corporate Folders</li>
                      <li>
                        Custom Illustrations (limited to one simple illustration
                        during the trial)
                      </li>
                      <li> Display Ads</li>
                      <li>
                        Ebooks (limited to 2-3 pages during the trial, depending
                        on the amount of content)
                      </li>
                      <li>Ecommerce Graphics</li>
                      <li>EDM (Email Direct Mail)</li>
                      <li>Email Signatures</li>
                      <li>Event Invitations</li>
                      <li>Flyers & Posters</li>
                      <li>GIFs</li>
                      <li>Icons</li>
                      <li>Infographics</li>
                      <li>Landing Pages (not included during the trial)</li>
                      <li>Logos (not included during the trial)</li>
                      <li>Magazine & Newspaper Ads</li>
                      <li>Newsletters</li>
                      <li>NFT Designs</li>
                      <li>Packaging & Labels</li>
                      <li>Podcast Covers</li>
                      <li>Point Of Sale Materials</li>
                      <li>
                        Powerpoint Templates (limited to 2-3 slides during the
                        trial, depending on the amount of content)
                      </li>
                      <li>
                        Presentation Decks (limited to 2-3 slides during the
                        trial, depending on the amount of content)
                      </li>
                      <li>Print Ads</li>
                      <li>Product Mockups</li>
                      <li>Promotional Materials</li>
                      <li>Restaurant Menus</li>
                      <li>Signage</li>
                      <li>Social Media Posts & Ads</li>
                      <li>Stationery Sets</li>
                      <li>T-shirt Design</li>
                      <li>Tradeshow Banners</li>
                      <li>Vehicle Wraps</li>
                      <li>Video Thumbnails</li>
                      <li>Web Ads</li>
                      <li>
                        And just about anything that can be designed in PS, AI,
                        or INDD.
                      </li>
                    </ul>
                  </p>
                }
              />
              <TypoFAQ
                question="My business is rapidly expanding. Can you keep up?"
                ans={
                  <p className="font-nunito">
                    Absolutely. If you require more than one subscription to
                    keep up with all your design needs, you can add additional
                    subscriptions at any time. And you can also cancel them at
                    any time, which means you can scale up, or down quickly.{" "}
                    <br />
                    With each additional subscription that you add, you'll
                    increase the number of outputs you receive, and the speed at
                    which you receive them. <br />
                    For example, one additional subscription will double the
                    designs you get completed each business day. <br />
                    To learn more about adding additional subscriptions, reach
                    out to us on the live chat at www.grafixy.io, 7 days a week!
                    Or to add an additional subscription, log in to your account
                    at www.grafixy.io.
                  </p>
                }
              />
              <TypoFAQ
                question="How much is the service?"
                ans={
                  <p className="font-nunito">
                    $200 USD per month, for grafixy Graphics; $500 USD per month
                    for grafixy Video; <br /> No set-up fee, no minimum terms,
                    no cancellation penalties. Absolutely no contracts.
                  </p>
                }
              />
              <TypoFAQ
                question="How do I submit and manage my requests?
            "
                ans="There are two ways you can make requests – through email at request@grafixy.io, or through our task management software, Trello. Check out our handy guide on how grafixy users can use Trello below:
            "
              />
              <TypoFAQ
                question="How many brands can I submit requests for?
            "
                ans="An unlimited number. We’re happy to help you with as many designs as you need.

            "
              />
              <TypoFAQ
                question="How do I get revisions done?"
                ans="Your dedicated design team will take care of your design, from first-draft to final product. And all the revisions you need. Just let them know the details of the revisions required, via email or your Trello board."
              />
              <TypoFAQ
                question="Trello 101"
                ans={
                  <p className="font-nunito">
                    Your Trello board includes:
                    <ul className={classes.listMain}>
                      <li>Cards for each of your requests</li>
                      <li>Lists for each stage of the design process</li>
                      <li>
                        An Activity Feed where you can see all of the activity
                        that has taken place on your board
                      </li>
                    </ul>
                    New Requests: <br />
                    To make a request simply create a new card in the "Requests"
                    list. Include a detailed description and add any relevant
                    attachments. <br />
                    grafixy Tip: Refer to the “Resources” list to help you
                    figure out which details to include. <br />
                    Prioritizing Your Requests: <br /> When you’re making
                    multiple requests, be sure to order your cards according to
                    priority. Requests are fulfilled on a first-come,
                    first-served basis, from the top down. So, if you’re posting
                    multiple requests at the same time, make sure the order of
                    your cards reflects which tasks should be completed first.{" "}
                    <br /> Revision Requests <br /> Requesting revisions is a
                    simple, 2-step process.
                    <ul className={classes.listMain}>
                      <li>
                        Add the details of the revision required in the comments
                        section of the relevant card.
                      </li>
                      <li>
                        Move the relevant card from the "In Review" list to the
                        "Requests" list. The sooner you do this, the sooner we
                        work on your revision request.
                      </li>
                    </ul>
                    Adding Brand Guidelines <br />
                    You can add your brand guidelines to the "Guidelines" list
                    to make the design process more efficient. Add a new card
                    for each brand you will be requesting designs for. And be
                    sure to include as many details as possible (logos, color
                    palettes, style guides or style references, inspiration
                    images, and designs). We want to know it all!
                  </p>
                }
              />
            </div>
          </div>

          <div className="">
            <h1 className="font-bold 2xl:text-3xl lg:text-2xl sm:text-xl text-2xl leading-none text-white 2xl:mb-[30px] lg:mb-7 sm:mb-6 mb-5 uppercase ">
              REQUEST GUIDELINES
            </h1>
            <div className={classes.subMain}>
              <TypoFAQ
                question="Social Media Designs"
                ans={
                  <p className="font-nunito">
                    <ul className={classes.listMain}>
                      <li>Describe what you’re looking for</li>
                      <li>
                        Attach your brand assets (logo, pictures, elements etc.)
                      </li>
                      <li>Specify the size of the design</li>
                      <li>Confirm platform and placement</li>
                      <li>
                        Text copy (headline, call-to-action, contact
                        information, etc.)
                      </li>
                      <li>Tell us the style you’d like, e.g.</li>
                      <ul className={classes.listMain}>
                        <li>Traditional or Modern</li>
                        <li>Abstract or Literal</li>
                        <li>Playful or Mature</li>
                        <li>Feminine or Masculine</li>
                      </ul>
                      <li>Tell us your preferences for color and font</li>
                      <li>Tell us what to avoid</li>
                      <li>Describe your industry and target audience</li>
                      <li>Include any references for designs you like</li>
                    </ul>
                  </p>
                }
              />
              <TypoFAQ
                question="The Basics"
                ans={
                  <p className="font-nunito">
                    {" "}
                    With every design request you should include the following
                    details:
                    <ul className={classes.listMain}>
                      <li>Size</li>
                      <li>Style</li>
                      <li>Orientation</li>
                      <li>Inspiration</li>
                      <li>Text copy</li>
                      <ul className={classes.listMain}>
                        {" "}
                        Print Designs require a few additional details:
                        <li>
                          Bleed size (you can confirm this with your printer)
                        </li>
                        <li>
                          File formats (you can confirm this with your printer)
                        </li>
                      </ul>
                    </ul>
                    grafixy Tip: Want fewer revisions? Be as descriptive as
                    possible, triple check your text copy, and provide pictures
                    as references of the style you’d like. <br /> <br /> How To
                    Access Your Files <br /> Your completed design files are all
                    available in the “Completed” list on your Trello board. To
                    find what you’re looking for quickly, use the search bar at
                    the top of your board. <br />
                    Or they'll be in your inbox if you've chosen to use grafixy
                    with email. If you require your designs in a particular
                    format, be sure to let your grafixy team know!
                  </p>
                }
              />
              <TypoFAQ
                question="Business Card
            "
                ans={
                  <p className="font-nunito">
                    <ul className={classes.listMain}>
                      <li>Describe what you’re looking for</li>
                      <li>
                        Attach your brand assets (logo, pictures, elements etc.)
                      </li>
                      <li>
                        Specify the size of the design (inches or centimetres)
                      </li>
                      <li>
                        Specify the size of the bleed (we’ll include the
                        standard size if you’re not sure)
                      </li>
                      <li>Specify the orientation – vertical or horizontal</li>
                      <li>Text copy (include variations for each employee):</li>
                      <li>Tell us the style you’d like, e.g. </li>
                      <li>Tell us your preferences for color and font</li>
                      <li>Tell us what to avoid</li>
                      <li>Tell us your industry and target audience</li>
                      <li>
                        Include any references for business cards you like
                      </li>
                    </ul>
                    What should I do if my team is having trouble understanding
                    my ideas? <br />
                    We offer unlimited revisions because we want you to get
                    exactly what you need. But, at times, there can be a
                    disconnect between what you imagine and what you get. If you
                    find yourself in that spot, here’s what we recommend:
                    <ul className={classes.listMain}>
                      <li>
                        Review your requests: Sometimes a request is missing
                        details or not as clear as it could be. Try providing
                        additional references and details in your revision
                        requests.
                      </li>
                      <li>
                        Give your designer detailed feedback: Let your designer
                        clearly know what they’ve missed. They’ll work as
                        quickly as possible to have your design revised.
                      </li>
                    </ul>
                    grafixy Tip: After attempting steps 1 and 2, if you find
                    that your design is still falling short, shoot us an email
                    at support@grafixy.io. We’ll review the issue and work to
                    find you a resolution as quickly as possible.
                  </p>
                }
              />
              <TypoFAQ
                question="Flyers Or Posters"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>Specify the orientation – vertical or horizontal</li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>
                      Include any references for flyers or posters you like
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Brochures"
                ans={
                  <p className="font-nunito">
                    <ul className={classes.listMain}>
                      <li>Describe what you’re looking for</li>
                      <li>
                        Attach your brand assets (logo, pictures, elements etc.)
                      </li>
                      <li>Specify the type of brochure: </li>
                      <li>Specify the size of the design:</li>
                      <li>Specify the size of the bleed (if you know it)</li>
                      <li>
                        Text copy (headline, call-to-action, contact
                        information, etc.)**
                      </li>
                      <li>
                        grafixy Tip:** Be sure to specify the page number for
                        each set of content.
                      </li>
                      <li>Tell us the style you’d like, e.g.</li>
                      <li>Tell us your preferences for color and font</li>
                      <li>Tell us what to avoid</li>
                      <li>Describe your industry and target audience</li>
                      <li>Include any references for brochures you like</li>
                    </ul>
                    Here’s what that includes:
                    <ul className={classes.listMain}>
                      <li>Logo</li>
                      <li>Preferred colours/colour palette</li>
                      <li>Preferred fonts</li>
                      <li>Mission/vision</li>
                      <li>Target audience</li>
                    </ul>
                    grafixy Tip: Add a card to the “Guidelines” list with the
                    brand guidelines for each brand you’d like us to design for.
                    Be sure to mention the brand when making a request. We'll
                    take care of the rest.
                  </p>
                }
              />
              <TypoFAQ
                question="Blog Images"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (pixels)** <br /> grafixy
                      Tip:** If you don’t know the size, just send us the link
                      to your blog and we’ll design according to your layout.
                    </li>
                    <li>Text copy</li>
                    <li>Tell us the style you’d like, e.g.</li>
                    <li>Traditional or Modern</li>
                    <li>Abstract or Literal</li>
                    <li>Playful or Mature</li>
                    <li>Feminine or Masculine</li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>Include any references for blog images you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Background Removal"
                ans={
                  <p className="font-nunito">
                    Just let us know exactly which portions of the image(s) you
                    require and/or whether you'd like the background to be
                    completely removed, made transparent, or to retain a
                    specific colour. <br />
                    We'll take it from there, and touch up the edit too.
                  </p>
                }
              />
              <TypoFAQ
                question="Billboards"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>Specify the size of the bleed (if you know it)</li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>Traditional or Modern</li>
                        <li>Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>Include any references for billboards you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Billboards"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for/what to avoid</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>Specify the size of the design (pixels)</li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us your industry and target audience</li>
                    <li>
                      Include any references for banners you like (attachments
                      or links)
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="PowerPoint Templates & Presentation Decks
              "
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Attach any older versions of the presentation to provide
                      context.
                    </li>
                    <li>Text copy required on each slide</li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>Include any references for presentations you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Packaging & Labels"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels). If you have a previous design or template
                      available, attach it!
                    </li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>
                      Include any references for packaging & labels you like
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>Traditional or Modern</li>
                        <li>Abstract or Literal</li>
                        <li>Playful or Mature</li>
                        <li>Feminine or Masculine</li>
                      </ul>
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Email Signatures"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>Specify the size of the design (pixels)</li>
                    <li>
                      Text copy:
                      <ul className={classes.listMain}>
                        <li>-Name and job title</li>
                        <li>-Address</li>
                        <li>-Telephone number</li>
                        <li>-Cellphone number</li>
                        <li>-Website</li>
                        <li>-Social Network Usernames (if necessary)</li>
                        <li>-Address (if necessary)</li>
                      </ul>
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>
                      Include any references for email signatures you like
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Tradeshow Banners"
                ans={
                  <ul className={classes.listMain}>
                    <li>
                      Describe what you’re looking for (what type of banner
                      would you like designed?)
                    </li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels). grafixy Tip: If you have a previous design or
                      template available, attach it!
                    </li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>Tell us what to avoid</li>
                    <li>Describe your industry and target audience</li>
                    <li>
                      Include any references for tradeshow banners you like
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Avoiding Typos"
                ans={
                  <p className="font-nunito">
                    There are 2 easy ways to avoid typos in your design:
                    <ul className={classes.listMain}>
                      <li>1. Triple check the spelling of your text copy.</li>
                      <li>
                        2. Provide the text copy in a format we can copy and
                        paste from. You can do this by including it in the
                        description, attach a word doc or provide the link to a
                        Google doc.
                      </li>
                    </ul>
                  </p>
                }
              />
              <TypoFAQ
                question="Book Or Magazine Layout"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, author’s
                      picture, elements etc.)
                    </li>
                    <li>Confirm if your design is for a print or e-book</li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>Specify the orientation – vertical or horizontal</li>
                    <li>
                      Text copy (e.g. title, author’s name, brief intro/blurb
                      for the back cover)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Tell us the book’s genre and target audience</li>
                    <li>
                      Include any references for books or magazines you like the
                      layout of
                    </li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Infographics"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>Confirm if your design is for print or web</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>
                      Specify the size of the bleed (if your request is for
                      print)
                    </li>
                    <li>
                      Text copy (headline, call-to-action, contact information,
                      etc.)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Tell us the book’s genre and target audience</li>
                    <li>Include any references for infographics you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Restaurant Menus"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>Confirm if your design is for print or web</li>
                    <li>
                      Attach your brand assets (logo, pictures, elements etc.)
                    </li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>
                      Specify the size of the bleed (if your request is for
                      print)
                    </li>
                    <li>
                      Text copy
                      <ul className={classes.listMain}>
                        <li>
                          -Names of dishes, brief descriptions of each, price of
                          each
                        </li>
                        <li>-Telephone number(s)</li>
                        <li>-Address(es)</li>
                        <li>-Social media usernames</li>
                      </ul>
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>
                      Describe the cuisines you serve and your target audience
                    </li>
                    <li>Include any references for menus you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Book Covers
              "
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, author’s
                      picture, elements etc.)
                    </li>
                    <li> Confirm if your design is for a print or e-book</li>
                    <li>
                      Specify the size of the design (inches, centimetres or
                      pixels)
                    </li>
                    <li>Specify the orientation – vertical or horizontal</li>
                    <li>
                      Text copy (e.g. title, author’s name, brief intro/blurb
                      for the back cover)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>ll us the book’s genre and target audience</li>
                    <li>Include any references for book covers you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Podcast Covers"
                ans={
                  <ul className={classes.listMain}>
                    <li>Describe what you’re looking for</li>
                    <li>
                      Attach your brand assets (logo, pictures, author’s
                      picture, elements etc.) - anything you'd like on your
                      podcast cover.
                    </li>
                    <li>Confirm if your design is for a print or e-book</li>
                    <li>
                      Specify the size of the design (pixels) grafixy Tip:
                      Podcast feeds require artwork that is a minimum size of
                      1400 x 1400 pixels and a maximum size of 3000 x 3000
                      pixels. We recommend designing at 3000 x 3000 pixels. This
                      way you won't have to resize later on.
                    </li>
                    <li>
                      Text copy (e.g. title, author’s name, tagline, etc.)
                    </li>
                    <li>
                      Tell us the style you’d like, e.g.{" "}
                      <ul className={classes.listMain}>
                        <li>-Traditional or Modern</li>
                        <li>-Abstract or Literal</li>
                        <li>-Playful or Mature</li>
                        <li>-Feminine or Masculine</li>
                      </ul>
                    </li>
                    <li>Tell us your preferences for color and font</li>
                    <li>Tell us what to avoid</li>
                    <li>Tell us the podcast's focus and target audience</li>
                    <li>Include any references for podcast covers you like</li>
                  </ul>
                }
              />
              <TypoFAQ
                question="Requesting Revisions"
                ans={
                  <p className="font-nunito">
                    On Trello: br Comment, drag, and drop. Just add the details
                    of the revision required in a comment. Then move the
                    relevant card from the “In Review” or "Completed" list to
                    the “Requests” list. <br />
                    On Email: <br />
                    Respond with the details of the revision required.
                  </p>
                }
              />
              <TypoFAQ
                question="Prioritizing Requests
              "
                ans={
                  <p className="font-nunito">
                    When you’re making multiple requests, be sure to order your
                    cards according to priority. <br />
                    Requests are fulfilled on a first-come, first-served basis,
                    from the top down on Trello. So, if you’re posting multiple
                    requests at the same time, make sure the order of your cards
                    reflects which tasks should be completed first. <br />
                    Via email please be sure to mention if a particular task is
                    a priority.
                  </p>
                }
              />
              <TypoFAQ
                question="How To Email A Request"
                ans={
                  <p className="font-nunito">
                    <ul className={classes.listMain}>
                      <li>
                        Email the details of your request to request@grafixy.io
                      </li>
                      <li>
                        Be as descriptive as possible about your design—from the
                        subject line to the body of your email.
                      </li>
                      <li>
                        Attach pictures to be used, references, logos and/or
                        assets.
                      </li>
                    </ul>
                    grafixy Tip: If you’ll need your designer to select the
                    pictures for your design, be sure to give them points of
                    reference or a description of what you’re looking for. Need
                    help with making your request? Refer to our request
                    guidelines. <br />
                    <br />
                    Inviting Team Members To View Your Board <br />
                    Work as part of a team and need to give others access to
                    your designs? You've got it. <br />
                    Just let us know your team members' preferred emails or
                    their existing Trello usernames, if they already use Trello.
                    We'll then invite them to help you make and manage design
                    requests.
                  </p>
                }
              />
              <TypoFAQ
                question="Pausing & Cancelling Requests"
                ans={
                  <p className="font-nunito">
                    Pausing a request is easy. Simply comment on the relevant
                    card to let your designer know that the request should be
                    paused until you confirm. <br />
                    Cancelling a request is simple too. If you need to cancel a
                    request, just comment on the relevant card to let your
                    designer know that the request should be cancelled.
                  </p>
                }
              />
              <TypoFAQ
                question="Setting Up Notifications
              "
                ans={
                  <p className="font-nunito">
                    You can set up notifications for individual tasks by opening
                    the relevant card and selecting “watch”. <br />
                    If you’d like to set up notifications for an entire list,
                    simply click on the 3 dots beside the list name and select
                    “watch”. <br />
                    Notifications will alert you to: <br />
                    <ul className={classes.listMain}>
                      <li>All comments from other users</li>
                      <li>Adding, changing, and upcoming due dates</li>
                      <li>Card moves and archives</li>
                      <li>
                        Attachments uploaded to a card (or all cards in a list
                        if you've turned on notifications for a list)
                      </li>
                    </ul>
                    grafixy Tip: Click on the bell icon, at the top right corner
                    of your board to control the frequency of your notification
                    emails and to turn on/off desktop notifications.
                  </p>
                }
              />
              <TypoFAQ
                question="Duplicating Requests"
                ans={
                  <p className="font-nunito">
                    Duplicate requests easily by opening up a card, and
                    selecting “copy” under “actions”. You’ll be prompted to
                    create a new card title, and to select the board and list to
                    which the card should be added. The board will be your
                    grafixy board of course, and the list will be the "Requests"
                    list. <br />
                    You can then prioritize the request by selecting its
                    position in the "Requests" list.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
