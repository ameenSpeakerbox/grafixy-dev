import React from 'react';
import Layout from '../../components/layout/layout';
import { MainImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog(sort: { updatedAt: DESC }) {
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
    `,
  );

  return (
    <Layout>
      <div className="grid w-full  place-items-center bg-[#18003F] px-8 pt-10  pb-20 sm:px-[80px] sm:pt-36 lg:pt-40 2xl:px-[147px]">
        <h4 className="text-lg font-bold text-[#9C66F0]">Our Blogs</h4>
        <h1 className="mt-5 text-4xl font-medium leading-[110%] text-[#E0CCFF]">
          Our Recent Blogs
        </h1>
        <p className="mt-3 max-w-[540px] text-center font-nunito text-lg text-[#9C66F0]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <div className="mt-10 grid place-content-center place-items-center gap-7 gap-y-[60px] sm:grid-cols-2 lg:grid-cols-3">
          {data.allContentfulBlog.nodes.map((item) => (
            <div key={item.id} className="grid h-full w-full max-w-[370px]">
              <div className="flex h-full max-h-[220px] w-full items-center justify-center overflow-hidden rounded-[5px]">
                <MainImage
                  src={item.onePicture.file.url}
                  alt="pic"
                  width={100}
                  height={100}
                  className="ove h-full  w-full object-cover"
                />
              </div>
              <span className=" mt-7 flex h-min w-max items-center justify-center rounded-[5px] bg-[#6019CE] py-1 px-3 font-nunito text-xs font-semibold text-white">
                {item.createdAt}
              </span>
              <Link
                to={item.id}
                className="mt-5 text-2xl font-bold text-[#fff] hover:text-[#E0CCFF]"
              >
                {item.heading.heading}
              </Link>
              <p className="mt-2 font-nunito text-lg text-[#8B59DA]">
                {item.subtitle.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
