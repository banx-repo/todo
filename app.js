var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var assert = require("assert");

const dbURL = "mongodb+srv://data-vka5x.azure.mongodb.net";
const client = new MongoClient(dbURL, {
  user: "ba",
  password: "959Mrht2Ciy4T4eg",
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (rq, rs) => {
  rs.sendFile("index.html");
});

app.get("/api/todo", (rq, rs) => {
  client.connect((error) => {
    assert.equal(null, error);

    const collection = client.db("todo").collection("list");

    const done = rq.query.done ? true : false;

    collection.find({ isDone: done }).toArray((error, result) => {
      assert.equal(null, error);
      rs.status(200).send(result);
    });
  });
});

app.post("/api/todo", (rq, rs) => {
  client.connect((error) => {
    assert.equal(null, error);

    const collection = client.db("todo").collection("list");

    collection.insertOne(
      { title: rq.body.title, time: Date.now(), isDone: false },
      (error, result) => {
        assert.equal(null, error);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);

        rs.status(200).send({ ...result.ops[0] });
      }
    );
  });
});

app.delete("/api/todo", (rq, rs) => {
  client.connect((error) => {
    assert.equal(null, error);

    const collection = client.db("todo").collection("list");

    collection.deleteOne({ _id: ObjectID(rq.body.id) }, (error, result) => {
      assert.equal(null, error);
      assert.equal(1, result.result.n);

      rs.status(200).send();
    });
  });
});

app.put("/api/todo", (rq, rs) => {
  client.connect((error) => {
    assert.equal(null, error);

    const collection = client.db("todo").collection("list");

    collection.updateOne(
      { _id: ObjectID(rq.body.id) },
      {
        $set: {
          title: rq.body.title,
          isDone: rq.body.isDone,
          timeDone: Date.now(),
        },
      },
      function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);

        rs.status(200).send();
      }
    );
  });
});

app.get("/bookmark", (rq, rs) => {
  rs.sendFile("bookmark.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
