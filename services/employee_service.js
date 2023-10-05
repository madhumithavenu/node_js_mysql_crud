const db = require('../db')

module.exports.getAllEmployees = async () => {
    const [records] = await db.query("SELECT * FROM employees")
    return records;
}