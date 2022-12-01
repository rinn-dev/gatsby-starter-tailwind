import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Meta = ({ meta }) => {
  const data = useStaticQuery(graphql`
    query FetchMetaData {
      allSite {
        nodes {
          siteMetadata {
            siteUrl
          }
        }
      }
    }
  `);
  const baseUrl = data?.allSite.nodes[0].siteMetadata.siteUrl;
  const dummyThumbnail = "";

  return (
    <>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta?.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${meta.pathname}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta?.description} />
      <meta property="og:image" content={meta.image || dummyThumbnail} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${baseUrl}${meta.pathname}`} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta?.description} />
      <meta name="twitter:image" content={meta.image || dummyThumbnail} />
    </>
  );
};
export default Meta;
