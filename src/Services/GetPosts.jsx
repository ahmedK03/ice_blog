import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT;

export const GetPosts = async () => {

    const query = gql` 
      query MyQuery {
          blogPostsConnection {
            edges {
              node {
                auth_name {
                  about
                  name
                  id
                  image {
                    url
                  }
                }
                slug
                createdAt
                blogTitle
                blogExcerpt
                blogImage {
                  url
                }
                blogCategories {
                  name
                  slug
                }
              }
            }
          }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.blogPostsConnection.edges;
}
