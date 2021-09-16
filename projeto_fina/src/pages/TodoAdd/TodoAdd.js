import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import "./TodoAdd.scss";

const TodoAdd = (props) => {
  const [priorityValue, setPriorityValue] = React.useState("1");
  const [statusValue, setStatusValue] = React.useState("1");

  const handlePriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const status = e.target.status.value;
    const dateFinal = e.target.dateFinal.value;

    const Todo = {
      title: title,
      description: description,
      priority: priority,
      status: status,
      dateFinal: dateFinal,
    };

    console.log(dateFinal);

    const response = await Api.fetchPost(Todo);
    const data = await response.json();
    props.history.push("/");
  };

  return (
    <Container fixed>
      <div className="main-text">
        <Typography variant="h4" color="textPrimary">
          Adicionar Nova Tarefa
        </Typography>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="textfield-margin">
          <TextField
            required
            label="Nome"
            variant="outlined"
            name="title"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            required
            multiline
            label="Descrição"
            variant="outlined"
            rows={5}
            style={{ width: "48em" }}
            name="description"
          />
        </div>
        <div className="textfield-margin">
          <FormControl component="fieldset">
            <FormLabel component="legend">Prioridade</FormLabel>
            <RadioGroup
              aria-label="prioridade"
              name="priority"
              value={priorityValue}
              onChange={handlePriorityChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Alta" />
              <FormControlLabel value="2" control={<Radio />} label="Média" />
              <FormControlLabel value="3" control={<Radio />} label="Baixa" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="textfield-margin">
          <FormControl component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="status"
              value={statusValue}
              onChange={handleStatusChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Fazer" />
              <FormControlLabel value="2" control={<Radio />} label="Fazendo" />
              <FormControlLabel value="3" control={<Radio />} label="Feito" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="textfield-margin">
          <TextField
            required
            type="date"
            defaultValue="2021-09-15"
            label="Data Finalização"
            variant="outlined"
            name="dateFinal"
          />
        </div>
        <div className="button-area-add">
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default TodoAdd;