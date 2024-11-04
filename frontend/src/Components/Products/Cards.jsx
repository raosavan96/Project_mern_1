import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({ data }) {
  const { description, price, proimg, productstatus, rating, title } = data;
  return (
    <Card sx={{ maxWidth: 300 , margin: "0 auto 25px"}}>
      <CardMedia
      style={{width:"300px", height:"300px", objectFit:"contain" ,aspectRatio:"3/2"}}
        image={`/uploads/${proimg}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Price: {price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Rating: {rating}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Stock: {productstatus}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
