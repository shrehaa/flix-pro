import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../../../constants";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "red",
}));

const Page = () => {
  const { gptSearchResult } = useSelector((store) => store.gpt);
  console.log(gptSearchResult, "array");
  return (
    <Box sx={{ flexGrow: 1, margin: "50px" }}>
      <Grid container spacing={2}>
        {gptSearchResult &&
          gptSearchResult.map((item) => {
            console.log(`${POSTER_URL}${item.results[0].poster_path}`, "item");
            return(
              <Grid item xs={4}>
          <Item>
            <img src={`${POSTER_URL}${item.results[0].poster_path}`} alt="gptmovies" height="200px" width="200px"/>
          </Item>
        </Grid>
            )
          })}

        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Page;
