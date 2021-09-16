import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#3d405b", color: "white" }}
      >
        <Container fixed>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
                Tarefas
              </Link>
            </Typography>

            <div>
              <Link to={`/add`} style={{ textDecoration: "none" }}>
                <Button
                  edge="end"
                  className={classes.menuButton}
                  style={{ color: "white" }}
                  aria-label="menu"
                >
                  <AddCircleIcon />
                  <Typography
                    variant="subtitle2"
                    style={{ marginLeft: "10px" }}
                  >
                    Adicionar nova tarefa
                  </Typography>
                </Button>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}