import { ChangeEvent, FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../../auth/AuthProvider";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  division: string;
  username: string;
  password: string;
  reenterPassword: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const divisions = [
  "Intermediate",
  "Advanced",
  "Open",
  "Women's Amateur",
  "Women's Open",
];

const initialForm: FormData = {
  email: "",
  firstName: "",
  lastName: "",
  division: "",
  username: "",
  password: "",
  reenterPassword: "",
};

function validate(values: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!values.division) errors.division = "Please select a division.";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.firstName) errors.firstName = "Please enter a first name.";
  if (!values.lastName) errors.lastName = "Please enter a last name.";
  if (!values.username || values.username.length < 4) {
    errors.username = "Username must be at least 4 characters long.";
  }
  if (!values.password || values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }
  if (!values.reenterPassword || values.reenterPassword !== values.password) {
    errors.reenterPassword = "Passwords do not match.";
  }
  return errors;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const { register } = useAuth();

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleDivisionChange = (event: SelectChangeEvent) => {
    setFormData((previous) => ({ ...previous, division: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    register(
      formData.division,
      formData.email,
      formData.firstName,
      formData.lastName,
      formData.password,
      formData.reenterPassword,
      formData.username
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="email">Enter your email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
          value={formData.email}
          error={Boolean(errors.email)}
          helperText={errors.email}
          onChange={handleChange("email")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="firstName">Enter your first name</FormLabel>
        <TextField
          id="firstName"
          type="text"
          name="firstName"
          placeholder="ex: John"
          autoComplete="given-name"
          required
          fullWidth
          variant="outlined"
          value={formData.firstName}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          onChange={handleChange("firstName")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="lastName">Enter your last name</FormLabel>
        <TextField
          id="lastName"
          type="text"
          name="lastName"
          placeholder="ex: Smith"
          autoComplete="family-name"
          required
          fullWidth
          variant="outlined"
          value={formData.lastName}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          onChange={handleChange("lastName")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }} error={Boolean(errors.division)}>
        <FormLabel htmlFor="division">Select your division</FormLabel>
        <Select
          id="division"
          name="division"
          value={formData.division}
          required
          fullWidth
          onChange={handleDivisionChange}
        >
          {divisions.map((division) => (
            <MenuItem key={division} value={division}>
              {division}
            </MenuItem>
          ))}
        </Select>
        {errors.division ? <FormHelperText>{errors.division}</FormHelperText> : null}
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="username">Create a username</FormLabel>
        <TextField
          id="username"
          type="text"
          name="username"
          placeholder="ex: DiscGolfer123"
          autoComplete="username"
          required
          fullWidth
          variant="outlined"
          value={formData.username}
          error={Boolean(errors.username)}
          helperText={errors.username}
          onChange={handleChange("username")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="password">Create a password</FormLabel>
        <TextField
          name="password"
          placeholder="••••••••"
          type="password"
          id="password"
          autoComplete="new-password"
          required
          fullWidth
          variant="outlined"
          value={formData.password}
          error={Boolean(errors.password)}
          helperText={errors.password}
          onChange={handleChange("password")}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel htmlFor="reenterPassword">Re-type password</FormLabel>
        <TextField
          name="reenterPassword"
          placeholder="••••••••"
          type="password"
          id="reenterPassword"
          autoComplete="new-password"
          required
          fullWidth
          variant="outlined"
          value={formData.reenterPassword}
          error={Boolean(errors.reenterPassword)}
          helperText={errors.reenterPassword}
          onChange={handleChange("reenterPassword")}
        />
      </FormControl>
      <Button type="submit" fullWidth variant="contained">
        Sign up
      </Button>
    </Box>
  );
}
