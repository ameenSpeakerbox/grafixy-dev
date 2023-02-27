import { MainImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS, PARAGRAPH } from "@contentful/rich-text-types";
import { graphql, useStaticQuery } from "gatsby";
import { ShareItOn } from "../../ui/share";

const Index = ({ location }) => {
  const slug = location.pathname.split("/")[2];

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog(sort: { updatedAt: DESC }) {
          nodes {
            id
            tags
            createdAt(formatString: "MMMM do yyyy")
            subtitle {
              subtitle
            }
            description {
              description
            }
            heading {
              heading
            }
            onePicture {
              file {
                url
              }
            }
            richText {
              raw
            }
          }
        }
      }
    `
  );

  const blog = data.allContentfulBlog.nodes.filter(
    (item) => item.id === slug && item
  )[0];

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h1 className="font-medium text-3xl leading-[110%] text-[#E0CCFF] mt-11">
            {children}
          </h1>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF] mt-4 max-w-[1140px]">
          {children}
        </p>
      ),
    },
  };

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
              {blog.description.description.split("\n\n").slice(1)}
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
            {blog.description.description.split("\n\n").slice(1)}
            </p>
            <br />
            <p className="text-lg font-nunito leading-[140%] tracking-[-1%] text-[#EADDFF] lg:mt-11 max-w-[1140px]">
            {blog.description.description.split("\n\n").slice(0)}
            </p>
            {renderRichText(blog.richText, options)}
            <ShareItOn location={location} blog={blog} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
