import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import { getProblems } from "../actions/problemsActions";
import HomeTable from "../components/rp/HomeTable";
import Upper from "../components/rp/Upper";
import Grid from "@material-ui/core/Grid";
import HomeSide from "../components/rp/HomeSide";
import NewHome from '../components/rp/NewHome'
const Home = () => {
  
  const getProblemsAll = useSelector((state) => state.getProblemsAll);
  const { loading, error, problems } = getProblemsAll;

  

  return (
    <>
      {loading && (
        <Grid style={{ marginTop: "4rem" }}>
          <LinearProgress style={{ width: "100%" }} />
        </Grid>
      )}
      <Grid container direction="column" spacing={4} alignItems="center">
        {!loading && (
          <>
            <Upper />
            <Grid
              container
              item
              xs={11}
              spacing={4}
              style={{ marginTop: "6rem" }}
            >
              <HomeTable questions={problems ? problems : null} />
              <NewHome />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Home;
