import { Box, FormControl, TextField, Button, Link } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/AuthContext";

export type LoginType = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const Auth = () => {
  const state = useLocation().state as { isLogin: boolean };
  const [isLogin, setIsLogin] = useState(state?.isLogin ?? true);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<LoginType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: undefined,
      email: undefined,
      password: undefined,
    },
  });

  const onHandleSubmitHandler = (input: LoginType) => {
    if (isLogin) {
      authCtx.login();
      navigate("/");
    } else {
      console.log("not isLogin");
    }
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
        {!isLogin && (
          <TextField
            type="text"
            label="name"
            size="small"
            {...register("name", { required: true, minLength: 5 })}
          />
        )}
        <TextField
          type="text"
          label="Email"
          size="small"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)$/,
          })}
        />
        <TextField
          type="text"
          label="Password"
          size="small"
          {...register("password", { required: true, minLength: 5 })}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleSubmit(onHandleSubmitHandler)}
        >
          {isLogin ? "LOGIN" : "REGISTER"}
        </Button>
      </FormControl>
      <small>
        {isLogin && (
          <>
            Need an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                setIsLogin((oldValue) => !oldValue);
              }}
            >
              Register here
            </Link>
          </>
        )}
        {!isLogin && (
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsLogin((oldValue) => !oldValue);
            }}
          >
            Back to login
          </Link>
        )}
      </small>
    </Box>
  );
};

export default Auth;
