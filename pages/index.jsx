import Layout from '../components/Layout';
import MarkdownContent from '../components/markdownContent';

const homePageCopy = `
  Product manager. Ex onefinestay, Mercari, Starling. Now [Shpock](https://apps.apple.com/gb/app/shpock-buy-sell-shopping/id557153158).
  
  This website is mostly to teach myself a little React. The code is on my github.

  Excited by this website and want to be my friend? Email me on farisdeshmukh@gmail.com
`;

export default () => (
  <Layout>
    <div className="body">
      <MarkdownContent markup={homePageCopy} />
    </div>
  </Layout>
);
