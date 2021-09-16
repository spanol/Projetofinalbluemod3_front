import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import FlagIcon from "@material-ui/icons/Flag";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Todo_Card = (props) => {
  const classes = useStyles();
  const todo = props.todo;

  const priorityColor = () => {
    if (todo.prioridade === 3) {
      return "#9BCA3E";
    } else if (todo.prioridade === 2) {
      return "#FFB92A";
    } else {
      return "#ED5314";
    }
  };

  const statusColor = (todo) => {
    if (todo.status === 3) {
      return "#9BCA3E";
    } else if (todo.status === 2) {
      return "#FFB92A";
    } else {
      return "#ED5314";
    }
  };

  const statusText = (todo) => {
    if (todo.status === 3) {
      return "Feito";
    } else if (todo.status === 2) {
      return "Fazendo";
    } else {
      return "Fazer";
    }
  };

  const formatDate = (todo) => {
    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    let data = new Date(todo.dataFinal);
    let dataFormatada =
      (data.getDate()+1) + " " + months[data.getMonth()] + " " + data.getFullYear();

    return dataFormatada;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            style={{
              backgroundColor: priorityColor(todo),
              color: "white",
              border: "3px solid #E6E6E6",
            }}
            className={classes.avatar}
          >
            <FlagIcon />
          </Avatar>
        }
        titulo={todo.titulo}
        subheader={formatDate(todo)}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {todo.descricao}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div style={{ marginLeft: "10px" }}>
          <Chip
            label={statusText(todo)}
            style={{
              backgroundColor: statusColor(todo),
              color: "white",
              border: "3px solid #E6E6E6",
            }}
          />
        </div>
      </CardActions>
      <Link to={`/view/${todo._id}`} style={{ textDecoration: "none" }}>
        <Button variant="contained" style={{ width: "100%" }}>
          Ver Mais
        </Button>
      </Link>
    </Card>
  );
};

export default Todo_Card;