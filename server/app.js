const express = require("express");
const app = express();

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT;

const userRoutes=require('./routes/userRoute')
const questionsRoutes=require('./routes/questionsRoute')

const dbConnect = require("./db/dbConnect");
app.use(express.json());
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use('/',userRoutes)
app.use('/api/user/register',userRoutes);
app.use('/api/user/login',userRoutes);
app.use('/api/user/details',userRoutes);
app.use('/api/user/get-users',userRoutes)
app.use('/api/user/logout',userRoutes);


app.use('/',questionsRoutes)
app.use('/api/questions/get-questions',questionsRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
