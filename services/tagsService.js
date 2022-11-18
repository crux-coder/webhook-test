var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "diagrammer",
});
connection.connect();

function getAllTags(cb) {
  connection.query(
    "SELECT * FROM wp_bsk_pdf_manager_cats;",
    function (error, results, fields) {
      if (error) throw error;
      cb(results);
    }
  );
}

function getPDFsByTagId(tagId, cb) {
  connection.query(
    `
  SELECT * FROM diagrammer.wp_bsk_pdf_manager_relationships INNER JOIN diagrammer.wp_bsk_pdf_manager_pdfs ON wp_bsk_pdf_manager_relationships.pdf_id=wp_bsk_pdf_manager_pdfs.id WHERE wp_bsk_pdf_manager_relationships.cat_id=${tagId};`,
    function (error, results, fields) {
      if (error) throw error;
      cb(results);
    }
  );
}

module.exports = {
  getAllTags,
  getPDFsByTagId,
};
