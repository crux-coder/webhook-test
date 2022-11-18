const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const tagsService = require("./services/tagsService");

app.use(cors());
app.use(express.json());

app.get("/tags", (req, res) => {
  tagsService.getAllTags(function cb(allTags) {
    res.send(allTags);
  });
});

app.get("/tags/:tagId/pdfs", (req, res) => {
  const { tagId } = req.params;
  tagsService.getPDFsByTagId(tagId, function cb(pdfs) {
    res.send(pdfs);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
