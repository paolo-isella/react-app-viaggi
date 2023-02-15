import { Box, Button, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { PlaceType } from "./NewPlace";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const { handleSubmit, register } = useForm<PlaceType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: identifiedPlace?.title,
      description: identifiedPlace?.description,
    },
  });

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  const onHandleSubmitHandler = (input: PlaceType) => {
    console.log(input);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 50px",
        gap: "5px",
      }}
    >
      <FormControl sx={{ gap: "10px", width: "50%" }}>
        <TextField
          type="text"
          label="Title"
          size="small"
          {...register("title", { required: true })}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          {...register("description", { required: true })}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleSubmit(onHandleSubmitHandler)}
        >
          ADD PLACE
        </Button>
      </FormControl>
    </Box>
  );
};

export default UpdatePlace;
