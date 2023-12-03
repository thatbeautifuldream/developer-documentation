import Badge from "./components/Badge";

const theme = {
  titleSuffix: " | 100xdocs",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/thatbeautifuldream/100xdocs",
  projectLink: "https://github.com/thatbeautifuldream/100xdocs",
  logo: () => (
    <>
      {/* <img
        src="/typescript.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      /> */}
      <Badge text="TS" />
      <h1>
        100xdocs <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/typescript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/typescript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/typescript.svg"
        />
        <link rel="mask-icon" href="/typescript.svg" color="#000000" />
        <link rel="shortcut icon" href="/typescript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="This website consists of docs related to the 100xdevs Cohort, which is split up into week wise sessions."
        />
        <meta
          name="description"
          content="This website consists of docs related to the 100xdevs Cohort, which is split up into week wise sessions."
        />
        <meta name="author" content="Milind Mishra" />
        <meta
          property="og:url"
          content="https://100xdocs.vercel.app/ogimage.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta property="og:title" content={`${props.title} | 100xdocs`} />
        <meta
          property="og:description"
          content="This website consists of docs related to the 100xdevs Cohort, which is split up into week wise sessions."
        />
        <meta
          property="og:image"
          content="https://100xdocs.vercel.app/ogimage.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@milindstwt" />
        <meta name="twitter:creator" content="@milindstwt" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © Milind Mishra`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
