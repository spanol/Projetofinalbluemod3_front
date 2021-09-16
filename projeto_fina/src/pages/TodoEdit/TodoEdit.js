import React, { useEffect, useState } from "react";
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
import "./TodoEdit.scss";

const TaskEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    data.priority = (data.priority).toString();
    data.status = (data.status).toString();
    data.dateFinal = (data.dateFinal).toString();
    setFields(data);
  };

  const handleFieldsChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.name] = e.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...fields };
    const result = await Api.fetchPut(data, id);
    const response = await result.json();
    console.log(response);
    props.history.push("/");
  };

  return (
    <Container fixed>
      <div className="main-text">
        <Typography variant="h4" color="textPrimary">
          Editar Tarefa
        </Typography>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="textfield-margin">
          <TextField
            value={fields.title || ""}
            label="Título"
            name="title"
            onChange={handleFieldsChange}
            variant="outlined"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            label="Descrição"
            value={fields.description || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            multiline
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
              value={fields.priority || ""}
              onChange={handleFieldsChange}
            >
              <FormControlLabel value={"1"} control={<Radio />} label="Alta" />
              <FormControlLabel value={"2"} control={<Radio />} label="Média" />
              <FormControlLabel value={"3"} control={<Radio />} label="Baixa" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="textfield-margin">
          <FormControl component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="status"
              value={fields.status || ""}
              onChange={handleFieldsChange}
            >
              <FormControlLabel value={"1"} control={<Radio />} label="Fazer" />
              <FormControlLabel
                value={"2"}
                control={<Radio />}
                label="Fazendo"
              />
              <FormControlLabel value={"3"} control={<Radio />} label="Feito" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="textfield-margin">
          <TextField
            label="Data Final"
            value={fields.dateFinal || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            style={{ width: "15em" }}
            name="dateFinal"
          />
        </div>
        <div className="button-area-edit">
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" type="submit" color="primary">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default TaskEdit;