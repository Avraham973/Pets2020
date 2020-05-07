/** @format */
import React from "react";
import { Container, Button, makeStyles } from "@material-ui/core";

import { Pets } from "@material-ui/icons";
import PetsIcon from "@material-ui/icons/Pets";

import { render } from "react-dom";

import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const makeOnDragEndFunction = (fields) => (result) => {
  // dropped outside the list
  if (!result.destination) {
    return;
  }
  fields.swap(result.source.index, result.destination.index);
};

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "none" : "lightgrey",
  padding: "grid",
  width: "auto",
  display: "table-cell",
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  //   padding: grid * 2,
  //   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "#96e6a1" : "white",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "rtl",
    textAlign: "right",
    marginTop: "3%",
  },
}));

// let nextId = 1;
// const grid = 8;
export const TrainingServiceForm = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <br />
      <br />
      <h1>טופס לפרטי סוג אילוף</h1>
      <Form
        onSubmit={onSubmit}
        mutators={{
          // potentially other mutators could be merged here
          ...arrayMutators,
        }}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray name='TrainingService'>
              {({ fields }) => (
                <DragDropContext onDragEnd={makeOnDragEndFunction(fields)}>
                  <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {fields.map((name, index) => (
                          <Draggable
                            key={name}
                            draggableId={name}
                            index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}>
                                <div key={name}>
                                  <Pets />
                                  <div>
                                    <label> כותרת משנית</label>
                                    <Field
                                      name={`${name}.subtitle`}
                                      component='input'
                                    />
                                  </div>
                                  <div>
                                    <label> פיסקה</label>
                                    <Field
                                      name={`${name}.text`}
                                      component='input'
                                    />
                                  </div>
                                </div>
                                <Button
                                  variant='contained'
                                  color='secondary'
                                  onClick={() => fields.remove(index)}>
                                  הסר
                                </Button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  <br />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => fields.push({ subtitle: "", text: "" })}>
                    הוסף
                  </Button>
                </DragDropContext>
              )}
            </FieldArray>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}>
              שלח
            </Button>
          </form>
        )}
      />{" "}
    </Container>
  );
};
