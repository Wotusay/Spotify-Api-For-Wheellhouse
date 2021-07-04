import React, { useState } from 'react';
import { connect } from 'react-redux';
import { initiatePostResult } from '../../../actions/results';

const TopTracks = ({ topTracks, profile }) => {
  // List items for the last numbers

  const [mouseHover, setMouseHover] = useState(false);
  const handlePostEvent = (e) => {
    const profileId = profile.id;
    const URI_IDS = { uris: [] };
    topTracks.items.map((item) => {
       URI_IDS.uris.push(item.uri);
       return null;
    });
    initiatePostResult(profileId, URI_IDS);
  };

  return (
    <>
      <div className="ml-12">
        {Object.keys(topTracks).length > 0 ? (
          <>
            <p className="title-card"> Most listened songs </p>

            <ul
              onMouseEnter={(e) => setMouseHover(true)}
              onMouseLeave={(e) => setMouseHover(false)}
              className="lastnumbers-card">
              <button
                onClick={(e) => handlePostEvent(e)}
                style={{opacity: mouseHover ? 1 : 0 }}
                className="absolute top-2/3 mt-10 ml-44 bg-green-600 rounded-full p-5 pl-8 pr-8 text-3xl transition ease-in duration-400 font-semibold hover:shadow-xl">
                Add all to a playlist
              </button>

              <div>
                {topTracks.items.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="bg-transparent cursor-pointer hover:bg-gray-800 p-0.5">
                        <a
                          target="_blank"
                          href={item.external_urls.spotify}
                          rel="noopener noreferrer">
                          <div className="items ">
                            <p className=" flex justify-center align-middle p-8 text-3xl font-semibold text-gray-400">
                              {index + 1}
                            </p>
                            <img
                              src={item.album.images[2].url}
                              alt={item.album.name}
                              width={item.album.images[2].width}
                              height={item.album.images[2].height}
                            />
                            <div className="pl-8">
                              <p className=" text-2xl font-semibold pb-2 ">
                                {item.name}
                              </p>
                              <div className="flex">
                                {item.artists.map((artist, index) => (
                                  <p
                                    key={artist.name}
                                    className=" text-xl pr-2 text-gray-400 ">
                                    {artist.name}
                                    {item.artists[index + 1] === undefined
                                      ? ''
                                      : ','}{' '}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </React.Fragment>
                  );
                })}
              </div>
            </ul>
            <div className="timespent" >
              <p className="text-2xl text-gray-400 font-normal pb-2">Currently Playing</p>
              <p className="text-5xl mt-2 font-semibold">
                  
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default connect()(TopTracks);
