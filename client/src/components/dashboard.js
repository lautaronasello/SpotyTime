import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Container, Form, Navbar } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./trackSearchResult";
import Player from "./player";
import axios from "axios";
import Logout from "./logout";

const spotifyApi = new SpotifyWebApi({
  clientId: "5e840d136ada47be9bd8479cc2223f1e",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");
  console.log(accessToken);

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!playingTrack) return;
    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div style={{ background: "linear-gradient(to bottom, #81b71a, white)" }}>
      <Container
        className="d-flex flex-column py-2"
        style={{ height: "100vh", background: "white" }}
      >
        <Navbar className="d-flex text-center pe-3" expand="lg">
          <Navbar.Brand className="me-5 pe-5 ps-4">
            <h1 className="display-5 me-5">SpotyTime</h1>
          </Navbar.Brand>
          <Form.Control
            style={{ width: "20rem" }}
            type="search"
            className="me-auto ms-5 "
            placeholder="Search Songs/Artists"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Logout />
        </Navbar>

        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
          {searchResults.map((track) => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
          {searchResults.length === 0 && (
            <div className="text-center" style={{ whiteSpace: "pre" }}>
              {lyrics}
            </div>
          )}
        </div>
        <div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
      </Container>
    </div>
  );
}
