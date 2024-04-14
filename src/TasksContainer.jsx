import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import { getTasks } from "../../Backend/controller/index";
import routerFn from "../../Backend/router/index.js";
// import { useEffect } from "react";
import  axios  from "axios";

function TasksContainer() {
  const testfn = async () => {
    // const 
    // const getUser=await axios.get("http://localhost:5000/users",)
    // console.log(getUser,"get all the tasks of user");
    // const res = await axios.get("http://localhost:5000/tasks");
    const task={
      taskName:'eat dinner',
      taskDescription:'eat whey and daal in dinner ',
      username:'karanBhardwajKBJ2'
    }
    const createTask = await axios.post("http://localhost:5000/user/createTasks",task);
    // console.log(res,"get user");
    console.log(createTask,"18 create task");
  };
  const router = routerFn;
  console.log(router);
  return (
    <>
      <Container
        style={{
          border: "1px solid black",
          marginTop: "5px",
        }}
      >
        <Box sx={{ height: "100vh", width: "500vw" }}>
          <Button variant="contained" onClick={testfn}>
            Contained
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default TasksContainer;
