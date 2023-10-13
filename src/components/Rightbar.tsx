import { Box } from "@mui/material";
import Search from "./Search";
import Premium from "./Premium";
import Topics from "./Topics";
import WhoFollow from "./WhoFollow";
import Footer from "./Footer";

export default function Rightbar() {
  return (
    <Box
      sx={{
        width: 350,
        mr: 2.5,
      }}
    >
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </Box>
  );
}
