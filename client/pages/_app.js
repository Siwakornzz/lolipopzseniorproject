import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../apollo/apolloClient";
import AuthProvider from "../appstate/AuthProvider";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import cookie from "cookie";
import { QUERY_USER } from "../apollo/queries";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';



function MyApp({ Component, pageProps, apollo, user }) {
  // console.log("User : ", user);
  return (
    <ApolloProvider client={apollo}>
      <AuthProvider userData={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
}

// TODO : FIX this fking case

// ---------- IT WORK
MyApp.getInitialProps = async ({ ctx, router }) => {
  if (process.browser) {
    return __NEXT_DATA__.props.pageProps;
  }
  console.log("Router : ", router);

  const { headers } = ctx.req;

  const cookies = headers && cookie.parse(headers.cookie || "");

  const token = cookies && cookies.jwt;
  console.log(token);

  if (!token) {
    if (
      router.pathname === "/subcontracts" ||
      router.pathname === "/hirecontracts" ||
      router.pathname === "/managesubcontract" ||
      router.pathname === "/managehirecontract" ||
      router.pathname === "/admin" ||
      router.pathname === "/admin/matching" ||
      router.pathname === "/admin/managesubcontracts" ||
      router.pathname === "/admin/managehirecontracts"
    ) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
    return null;
  } else if (token) {
    if (
      router.pathname === "/signin" ||
      router.pathname === "/signup" ||
      router.pathname === "/signin/resetpassword" ||
      router.pathname === "/signin/requestresetpassword"
    ) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }
  const response = await fetch("http://localhost:5001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}` || "",
    },
    body: JSON.stringify(QUERY_USER),
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    if (result.data.user.roles !== "Admin") {
      if (
        router.pathname === "/admin" ||
        router.pathname === "/admin/matching" ||
        router.pathname === "/admin/managesubcontracts" ||
        router.pathname === "/admin/managesubcontracts"
      ) {
        ctx.res.writeHead(302, { Location: "/" });
        ctx.res.end();
      }
    }
    return { user: result.data.user };
  } else {
    if (
      router.pathname === "/subcontracts" ||
      router.pathname === "/hirecontracts" ||
      router.pathname === "/managesubcontract" ||
      router.pathname === "/managehirecontract"
    ) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }
};

export default apolloClient(MyApp);
