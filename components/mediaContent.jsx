const styles = (
  <style jsx>
    {
      `
    .fullImage {
      max-width: 100%;
      width: 600px;
    }
    .halfImage {
      max-width: 100%;
      width: 300px;
    }
    .fullVideo {
      max-width: 100%;
      width: 600px;
    }
    .halfVideo {
      max-width: 100%;
      width: 300px;
      max-height: 533.33px;
    }
    `
    }
  </style>
);

const MediaContent = (props) => {
  const {
    type, size, altText, location,
  } = props;
  if (type === 'image') {
    return (
      <div>
        <img className={`${size}Image`} src={location} alt={altText} />
        {styles}
      </div>
    );
  } if (type === 'video') {
    return (
      <div>
        <video className={`${size}Video`} muted controls>
          <source src={location} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {styles}
      </div>
    );
  }
  throw Error;
};

export default MediaContent;
