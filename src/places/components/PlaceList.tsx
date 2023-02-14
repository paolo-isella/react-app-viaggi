import { Box, Card, CardContent } from "@mui/material";
import { Place } from "../pages/UserPlaces";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ items }: { items: ReadonlyArray<Place> }) => {
  if (items.length === 0) {
    return (
      <Card>
        <CardContent>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "0px 20px",
      }}
    >
      {items.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </Box>
  );
};

export default PlaceList;
