import React from "react";
import Layout from "../../components/layout/layout";
import blog1 from "../../images/blog/Blog Image.webp";
import blog2 from "../../images/blog/Blog Image-1.webp";
import blog3 from "../../images/blog/Blog Image-2.webp";
import blog4 from "../../images/blog/Blog Image-3.webp";
import blog5 from "../../images/blog/Blog Image-4.webp";
import { MainImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

const dummyBlog = [
  {
    id: 1,
    title: "Meet AutoManage, the best AI management tools",
    discretion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Dec 22, 2023",
    picture: blog1,
  },
  {
    id: 2,
    title: "How to earn more money as a wellness coach",
    discretion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Mar 15, 2023",
    picture: blog2,
  },
  {
    id: 3,
    title: "The no-fuss guide to upselling and cross selling",
    discretion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Jan 05, 2023",
    picture: blog3,
  },
  {
    id: 4,
    title: "Meet AutoManage, the best AI management tools",
    discretion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Dec 22, 2023",
    picture: blog4,
  },
  {
    id: 5,
    title: "How to earn more money as a wellness coach",
    discretion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Mar 15, 2023",
    picture: blog5,
  },
];

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog(sort: {updatedAt: DESC}) {
          nodes {
            id
            createdAt(formatString: "MMMM Do, yyyy")
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

  return (
    <Layout>
      <div className="bg-[#18003F] w-full 2xl:px-[147px] sm:px-[80px] px-8 lg:pt-40 sm:pt-36 pt-10  flex flex-col items-center justify-center pb-20">
        <h4 className="font-bold text-lg text-[#9C66F0]">Our Blogs</h4>
        <h1 className="text-[#E0CCFF] font-medium text-4xl leading-[110%] mt-5">
          Our Recent Blogs
        </h1>
        <p className="text-[#9C66F0] text-lg font-nunito max-w-[540px] text-center mt-3">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-7 gap-y-[60px] place-content-center place-items-center">
          {data.allContentfulBlog.nodes.map((item) => (
            <div key={item.id} className="grid w-full max-w-[370px] h-full">
              <div className="w-full max-h-[220px] h-full flex items-center justify-center overflow-hidden rounded-[5px]">
                <MainImage
                  src={item.onePicture.file.url}
                  alt="pic"
                  width={100}
                  height={100}
                  className="object-cover w-full  h-full ove"
                />
              </div>
              <span className=" py-1 px-3 flex items-center justify-center bg-[#6019CE] rounded-[5px] font-nunito font-semibold text-xs w-max text-white mt-7 h-min">
                {item.createdAt}
              </span>
              <Link
                to={item.id}
                className="font-bold text-2xl text-[#9C66F0] mt-5 hover:text-[#E0CCFF]"
              >
                {item.heading.heading}
              </Link>
              <p className="text-[#8B59DA] text-lg font-nunito mt-2">
                {item.subtitle.subtitle}
              </p>
            </div>
          ))}
          {dummyBlog.map((item) => (
            <div key={item.id} className="grid w-full max-w-[370px]">
              <div className="w-full max-h-[220px] h-full flex items-center justify-center overflow-hidden rounded-[5px]">
                <MainImage
                  src={item.picture}
                  alt="pic"
                  width={100}
                  height={100}
                  className="object-cover w-full  h-full ove"
                />
              </div>
              <span className=" py-1 px-3 flex items-center justify-center bg-[#6019CE] rounded-[5px] font-nunito font-semibold text-xs w-max text-white mt-7">
                {item.createdAt}
              </span>
              <Link
                to={item.title}
                className="font-bold text-2xl text-[#9C66F0] mt-5 hover:text-[#E0CCFF]"
              >
                {item.title}
              </Link>
              <p className="text-[#8B59DA] text-lg font-nunito mt-2">
                {item.discretion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
