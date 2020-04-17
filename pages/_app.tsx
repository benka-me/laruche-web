import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import App from "components/app/app";

class Wrapper extends NextApp {
  state = {
    mounted: false,
    token: "",
  };
  componentDidMount() {
    this.setState({ token: localStorage.getItem("auth"), mounted: true });
  }
  render() {
    const { Component, pageProps } = this.props;
    if (this.state.mounted) {
      return (
        <div>
          <div>
            <Head>
              <title>hive of service</title>
            </Head>
          </div>
          <App token={this.state.token}>
            <Component {...pageProps} />
          </App>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Wrapper;
