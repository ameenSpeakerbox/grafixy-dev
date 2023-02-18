import { MainImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout/layout";
import facebookIcon from "../../images/elements/facebook.svg";
import whatsappIcon from "../../images/elements/whatsapp.svg";
import instagramIcon from "../../images/elements/instagram.svg";
import linkedinIcon from "../../images/elements/linkedin.svg";
import headerImg from "../../images/single blog header image.webp";
import { graphql, useStaticQuery } from "gatsby";

const Index = ({ location }) => {
  const slug = location.pathname.split("/")[2];

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog {
          nodes {
            id
            tags
            createdAt(formatString: "MMMM do yyyy")
            subtitle {
              subtitle
            }
            heading {
              heading
            }
            onePicture {
              file {
                url
              }
            }
          }
        }
      }
    `
  );

  const blog = data.allContentfulBlog.nodes.filter(
    (item) => item.id === slug && item
  )[0];

  const shareToWhatsapp = (
    <>
      {location.href} <br />*{blog.heading.heading}* <br />
      <br />
      {blog.subtitle.subtitle}
    </>
  );

  return (
    <Layout>
      <div className="w-full flex items-center justify-center  2xl:px-[147px] sm:px-[80px] px-8 pt-40 flex-col bg-[#1A0143] pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 w-full items-center justify-center lg:gap-20 gap-10 ">
            <div>
              <h1 className="font-medium text-4xl leading-[110%] text-[#E0CCFF] max-w-[400px]">
                {blog.heading.heading}
              </h1>
              <div className="flex items-center justify-center gap-3 w-max mt-4 mb-4">
                {blog.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9C66F0] text-black text-xs px-2 py-1 rounded-md font-nunito"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF]  lg:block hidden max-w-[1140px]">
                {blog.subtitle.subtitle}
              </p>
            </div>
            <div className="grid place-content-center max-w-[753px] max-h-[400px] rounded-[27px] overflow-hidden">
              <MainImage
                src={blog.onePicture.file.url}
                alt="img"
                width={100}
                height={100}
                loading="lazy"
                className="object-contain object-center h-full w-full"
              />
            </div>
          </div>
          <div className="">
            <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF] block lg:hidden mt-11 max-w-[1140px]">
            
              {blog.subtitle.subtitle}
            </p>
            <br />
            <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF] lg:mt-11 max-w-[1140px]">
              Our branding services are tried and tested, yet flexible enough to
              accommodate your unique and optimum needs. By adopting a strong
              brand strategy and digital marketing plan, we facilitate a strong
              connect between your consumers and your brand, ultimately leading
              to a better brand experience and improved brand recall.
            </p>
            <h2 className="font-medium text-3xl leading-[110%] text-[#E0CCFF] mt-11">
              What you can expect from the team?
            </h2>
            <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF] mt-4 max-w-[1140px]">
              Our research team will study your brand, rediscover its core
              tenets, and reintegrate its identity. We will then repackage and
              reposition your brand in a manner that complements your company’s
              futuristic vision and strategic goals. Our strategic design and
              communication team get on the job, and rake up a series of
              impressive creatives that are bound to captivate and stimulate
              your consumer group.
            </p>
            <div className="inline-flex items-center justify-center text-[22px] leading-[122%] tracking-[-1%] text-white mt-12 gap-4">
              Share it on:&nbsp;&nbsp;
              <a
                type="button"
                href={`whatsapp://send?text=${location.href}`}
                data-action="share/whatsapp/share"
                target="_blank"
                className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
              >
                <MainImage src={whatsappIcon} alt="whats app" loading="lazy" />
              </a>
              <a
                type="button"
                href={`https://linkedin.com/shareArticle?${location.href}`}
                data-action="share/whatsapp/share"
                target="_blank"
                className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
              >
                <MainImage src={linkedinIcon} alt="whats app" loading="lazy" />
              </a>
              <a
                type="button"
                href={`https://www.facebook.com/sharer.php?u=${location.href}?imageurl=${blog.onePicture.file.url}`}
                data-action="share/whatsapp/share"
                target="_blank"
                className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
              >
                <MainImage src={facebookIcon} alt="whats app" loading="lazy" />
              </a>
              <button
                type="button"
                onClick={() => {
                  window.confirm(`Copied the link: ${location.href}`) &&
                    navigator.clipboard.writeText(location.href);
                }}
                className="border-none w-[35px] h-[35px] grid place-content-center bg-[#9C66F0] rounded-md"
              >
                <MainImage src={instagramIcon} alt="whats app" loading="lazy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
