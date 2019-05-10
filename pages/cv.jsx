import MarkdownContent from '../components/markdownContent';
import Layout from '../components/Layout';
import MediaContent from '../components/mediaContent';

const summaryCopy = `
  ## Products I have helped to make
`;

const mercariCopy = `
  ### Mercari, 2018-19
  Mercari is Japan's largest C2C marketplace, and most successful consumer startup in recent years.
  Mercari closed down in the UK in Q1 2019.

  In 2018, we adapted Mercari for the UK market by moving from a generalist marketplace to something specifically focussed towards young 18-25 year old women.
  
  Here's a before and after of my time there:
`;

const onefinestayCopy = `
  ### onefinestay, 2012-18
  onefinestay is a premium holiday-rental site, with some of the world's most beautiful homes. I joined at Series A and left post-exit.

  Since early 2017 I product managed the website. I transitioned the website from displaying 6 markets and low 1000s of homes, to 100s of markets across the world with 10,000+ homes, reworking the search and discovery experience.

  Website development effectively stopped since I left  🤷‍♂️, so [check it out](https://www.onefinestay.com) in all its January 2018 glory!
`;

export default () => (
  <Layout>
    <div className="body">
      <MarkdownContent markup={summaryCopy} />
      <MarkdownContent markup={mercariCopy} />
      <div id="mercariComparison">
        <MediaContent type="image" size="half" location="https://storage.googleapis.com/farisdeshmukh-com/images/mercari_old.png" alt="mercari homepage from 2017" />
        <MediaContent type="video" size="half" location="https://storage.googleapis.com/farisdeshmukh-com/videos/mercari_new.mp4" />
      </div>
      <MarkdownContent markup={onefinestayCopy} />
      <MediaContent type="image" size="full" location="https://storage.googleapis.com/farisdeshmukh-com/images/onefinestay.png" alt="onefinestay homepage" />
    </div>
    <style jsx>
      {
      `
      #mercariComparison {
        display: flex;
      }
      `
      }
    </style>
  </Layout>
);
