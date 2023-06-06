import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  // Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newMovie, setNewMovie] = useState(movie.name);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submit the form data
    if (name && email && movie && date) {
      // Save user details to local storage
      localStorage.setItem("userDetails", JSON.stringify({ name, email }));

      // Reset form fields
      setName("");
      setEmail("");
      setNewMovie("");
      setDate("");

      alert("Booking successful!");
    } else {
      alert("Please fill in all the fields.");
    }
  };
  // Data Fetching
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${params.id}`
    );
    setMovie(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("M", movie);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ marginLeft: "120px" }}>
            {movie.name}
          </Typography>
          <Typography variant="body2">{movie.summary}</Typography>

          {/* Form */}
          <Typography
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              marginLeft: "80px",
            }}
            variant="h4"
          >
            Book Movie
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <TextField
                  style={{ marginLeft: "50px" }}
                  type="text"
                  id="movie"
                  value={movie.name}
                  onChange={(e) => setNewMovie(e.target.value)}
                />
              </div>

              <TextField
                style={{ marginLeft: "50px", marginTop: "10px" }}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
              />
            </div>
            <div>
              <TextField
                style={{ marginLeft: "50px", marginTop: "10px" }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
              />
            </div>

            <div>
              <TextField
                style={{ marginLeft: "80px", marginTop: "10px" }}
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Button
              style={{ marginLeft: "110px", marginTop: "10px" }}
              variant="contained"
              type="submit"
            >
              Book Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetail;
