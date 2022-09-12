import React, { useState, useEffect } from 'react'
import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import {useQuery} from 'react-query';
// import { useState, useEffect } from "react";
const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
    textAlign: "center"
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
})

export default function PostData() {
  const classes = useStyles();
  const [students, setStudents] = useState([]);


  // useEffect(() => {
  //  async function getAllStudent() {
  //   try {
  //    const students = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //    // console.log(students.data);
  //    setStudents(students.data);
  //   } catch (error) {
  //    console.log("Something is Wrong");
  //   }
  //  }
  //  getAllStudent();
  // }, [])
  async function fetchPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data);
    return data;
  }
  async function handleDelete(id) {
    await axios.delete(`http://localhost:3333/students/${id}`);
    var newstudent = students.filter((item) => {
      // console.log(item);
      return item.id !== id;
    });
    setStudents(newstudent);
  }

  const { data, error, isError, isLoading } = useQuery('posts', fetchPosts)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  return (
    <>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Posts List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Body</TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              students.map((student, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">inam</TableCell>
                    <TableCell align="center">{student.body}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="View">
                        <IconButton><VisibilityIcon color="primary" /></IconButton>
                      </Tooltip><br></br>
                      <Tooltip title="Edit">
                        <IconButton><EditIcon /></IconButton>
                      </Tooltip><br></br>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(student.id)}><DeleteIcon color="secondary" /></IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
