import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import App from "components/app/app";

class Wrapper extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <div>
          <Head>
            <title>hive of service</title>
          </Head>
        </div>
        <App>
          <Component {...pageProps} />
        </App>
      </div>
    );
  }
}
export default Wrapper;
