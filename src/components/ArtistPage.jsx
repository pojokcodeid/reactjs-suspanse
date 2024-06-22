import PropTypes from "prop-types";
import { Suspense } from "react";
import Albums from "./Albums";

const ArtistPage = ({ artist }) => {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<Loading />}>
        <Albums artistId={artist.id} />
      </Suspense>
    </>
  );
};

ArtistPage.propTypes = {
  artist: PropTypes.object,
};

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

export default ArtistPage;
