import { StaticKitProvider } from "@statickit/react";

function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site={process.env.siteId}>
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default App;
