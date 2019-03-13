import MarkdownContent from '../components/markdownContent';
import Layout from '../components/Layout';

const summaryCopy = `
  ## Products I have helped to make
`;

const mercariCopy = `
  ### Mercari UK, 2018-19
  Mercari is Japan's largest C2C marketplace, and most successful consumer startup in recent years.
  Mercari closed down in the UK in Q1 2019.

  In 2018, we adapted Mercari for the UK market by moving from a generalist marketplace to something specifically focussed towards young 18-25 year old women.
  
  Here's a before (left) and after (right) of my time there:
`;

const onefinestayCopy = `
  ### onefinestay, 2012-18
  onefinestay is a premium holiday-rental site, with some of the world's most beautiful homes. During my time there it grew from one market (London) to hundreds.

  Since early 2017 I product managed the website.

  Website development effectively stopped since i left  🤷‍♂️, so [check it out](https://www.onefinestay.com) in all its 2018 glory!
`;


export default () => (
  <Layout>
    <div className="body">
      <MarkdownContent markup={summaryCopy} />
      <MarkdownContent markup={mercariCopy} />
      <img src="https://storage.googleapis.com/farisdeshmukh-com/images/mercari_old.png" height="500" alt="mercari homepage from 2017" />
      <video width="300" height="500" muted controls>
        <source src="https://storage.googleapis.com/farisdeshmukh-com/videos/mercari_new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <MarkdownContent markup={onefinestayCopy} />
      <img src="https://storage.googleapis.com/farisdeshmukh-com/images/onefinestay.png" width="500" alt="onefinestay homepage" />
    </div>
  </Layout>
);
