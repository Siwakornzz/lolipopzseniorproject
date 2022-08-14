import { ApolloProvider } from "@apollo/react-hooks";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient,InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";
import cookie from "cookie";

const uri = "http://localhost:5001/graphql";

const httpLink = createHttpLink({ uri, fetch });

const authLink = setContext((_, { headers }) => {
  // get token from Cookie
  let cookies;

  // server side :)
  if (headers) {
    cookies = cookie.parse(headers.cookie || "");
  }

  // client side :)
  if (typeof window !== "undefined") {
    cookies = cookie.parse(document.cookie || "");
  }

  // get cookie from jwt
  const token = (cookies && cookies.jwt) || "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  }

  // {
  //   render: ({ Page, props }) => {
  //     return (
  //       <ApolloProvider client={props.apollo}>
  //         <Page {...props} />
  //       </ApolloProvider>
  //     );
  //   },
  // }
);
