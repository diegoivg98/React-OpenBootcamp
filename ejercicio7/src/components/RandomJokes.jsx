import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const baseURL = "https://api.chucknorris.io/jokes/random";

const RandomJokes = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async () => {
    setIsDisabled(true);
    const response = await axios.get(baseURL);
    setJoke(response.data.value);
    setIsDisabled(false);
  };

  const voteLike = () => {
    setLike(like + 1);
    setIsDisabled(true);
  };

  const voteDisLike = () => {
    setDislike(dislike + 1);
    setIsDisabled(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#f5f5f5",
        marginBottom: "16px",
      }}
    >
      <h1>{joke}</h1>
      <Button variant="contained" onClick={getRandomJoke} endIcon={<RestartAltIcon />}>
        New Joke
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="contained"
          onClick={voteLike}
          sx={{ marginRight: 2 }}
          color="success"
          disabled={isDisabled}
          endIcon={<ThumbUpIcon />}
        >
          Like ({like})
        </Button>
        <Button
          variant="contained"
          onClick={voteDisLike}
          color="error"
          disabled={isDisabled}
          endIcon={<ThumbDownIcon />}
        >
          Dislike ({dislike})
        </Button>
      </Box>
    </Box>
  );
};

export default RandomJokes;
