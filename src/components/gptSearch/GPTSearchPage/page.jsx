import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../../mainPage/card/card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "red",
}));

const Page = () => {
  const { gptSearchResult } = useSelector((store) => store.gpt);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1, margin: "50px", overflowY:"scroll" }}>
      <Grid container spacing={2}>
        {gptSearchResult &&
          gptSearchResult.map((item) => {
            return (
              <Grid item xs={2} sx={{backgroundColor:"black", height:"250px"}}>
                <Item>
                  <Card item={item.results[0]} key={item.id} />
                </Item>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Page;
