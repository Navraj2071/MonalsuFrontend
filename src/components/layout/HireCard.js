import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Carousel from "../carousel/Carousel";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./Layout.css";

export default function HireCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          <Typography variant="body3" color="text.secondary">
            400 m
          </Typography>
        }
        title="Ramesh Dutt"
        subheader="Carpenter"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOI7JrZa1R15L6uewLjpphCxj2IO92-YYDQ&usqp=CAU"
        alt="Paella dish"
      /> */}

      <Carousel />
      <div className="ratingscontainer">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <Typography variant="body2" color="secondary">
          2.5/5
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Typography variant="body2" color="primary">
          107 Rs./hr
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="cardbuttoncontainer">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" color="primary">
            Hire
          </Button>
          <Button size="small" color="primary">
            Hide
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
