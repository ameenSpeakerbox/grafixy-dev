import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/layout/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS, PARAGRAPH } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import { ShareItOn } from '../../ui/share';

const Index = ({ location }) => {
  const slug = location.pathname.split('/')[2];

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
    `,
  );

  const blog = data.allContentfulBlog.nodes.filter(
    (item) => item.id === slug && item,
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
          <h1 className="mt-11 text-3xl font-medium leading-[110%] text-[#E0CCFF]">
            {children}
          </h1>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mt-4 max-w-[1140px] font-nunito text-lg leading-[140%] tracking-[-1%] text-[#EADDFF]">
          {children}
        </p>
      ),
    },
  };

  return (
    <Layout>
      <div className="flex w-full flex-col items-center  justify-center bg-[#1A0143] px-8 pt-40 pb-16 sm:px-[80px] 2xl:px-[147px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid w-full items-center justify-center gap-10 lg:grid-cols-2 lg:gap-20 ">
            <div>
              <h1 className="max-w-[400px] text-4xl font-medium leading-[110%] text-[#E0CCFF]">
                {blog?.heading.heading}
              </h1>
              <div className="mt-4 mb-4 flex w-max items-center justify-center gap-3">
                {blog?.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-[#9C66F0] px-2 py-1 font-nunito text-xs text-black"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="hidden max-w-[1140px] font-nunito text-lg leading-[140%]  tracking-[-1%] text-[#EADDFF] lg:block">
                {blog?.description.description.split('\n\n').slice(1)}
              </p>
            </div>
            <div className="grid max-h-[400px] max-w-[753px] place-content-center overflow-hidden rounded-[27px]">
              <MainImage
                src={blog?.onePicture.file.url}
                alt="img"
                width={100}
                height={100}
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
          <div className="">
            <p className="mt-11 block max-w-[1140px] font-nunito text-lg leading-[140%] tracking-[-1%] text-[#EADDFF] lg:hidden">
              {blog?.description.description.split('\n\n').slice(1)}
            </p>
            <br />
            <p className="max-w-[1140px] font-nunito text-lg leading-[140%] tracking-[-1%] text-[#EADDFF] lg:mt-11">
              {blog?.description.description.split('\n\n').slice(0)}
            </p>
            {blog?.richText.raw && renderRichText(blog?.richText, options)}
            <ShareItOn location={location} blog={blog} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
