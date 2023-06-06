import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AllMovies = ({ data }) => {
  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map((d) => (
          <Grid item xs={12} md={4} key={d.show.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={d.show.image.original}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {d.show.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Language: </b>
                  {d.show.language} 
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <b>RunTime: </b>
                  {d.show.runtime} min
                </Typography>

                <NavLink
                  to={`/movies/${d.show.id}`}
                  style={() => ({
                    textDecoration: "none",
                    marginTop: "20px",
                  })}
                >
                  <Button variant="contained" style={{ marginTop: "20px" }}>
                    Details
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AllMovies;
