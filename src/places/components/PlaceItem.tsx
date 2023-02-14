import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Place } from "../pages/UserPlaces";

const PlaceItem = ({ place }: { place: Place }) => {
  return (
    <Card className="place-item__content">
      <CardMedia
        component="img"
        alt={place.title}
        src={place.imageUrl}
        height="300"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {place.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {place.address}
          </Typography>
          <Typography component="p">{place.description}</Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", padding: "0px 10px 10px 10px" }}
      >
        <Button size="small">VIEW ON MAP</Button>
        <Button size="small">EDIT</Button>
        <Button size="small">DELETE</Button>
      </CardActions>
    </Card>
  );
};

export default PlaceItem;
