// src/Auth.js
import React, { useState } from "react";
import { auth } from "./firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Typography, Container, Paper, Box } from "@mui/material";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setMessage(`Signed Up Successfully! Welcome, ${userCredential.user.email}`);
        })
        .catch((error) => {
          setMessage(`Error Signing Up: ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setMessage(`Logged In Successfully! Welcome back, ${userCredential.user.email}`);
        })
        .catch((error) => {
          setMessage(`Error Logging In: ${error.message}`);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {isSignUp ? "Sign Up" : "Log In"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom={2}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </Button>
          </Box>
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {isSignUp ? "Switch to Log In" : "Switch to Sign Up"}
          </Button>
          {message && (
            <Typography color="error" align="center" sx={{ marginTop: 2 }}>
              {message}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;