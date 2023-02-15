import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export type PlaceType = {
  title: string | undefined;
  description: string | undefined;
  address?: string | undefined;
};

const NewPlace = () => {
  const { handleSubmit, register } = useForm<PlaceType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: undefined,
      description: undefined,
      address: undefined,
    },
  });

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
        <TextField
          type="text"
          label="Address"
          size="small"
          {...register("address", { required: true })}
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

export default NewPlace;
