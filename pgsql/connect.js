import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const pool = new  pg.Pool({
    host : "bvylohfgparcm3d3zi5j-postgresql.services.clever-cloud.com",
    database : "bvylohfgparcm3d3zi5j",
    user : "uwtorodkuhcisxbc0flp",
    password : "pXEuHK1q9GJYitvPV6Jr",
    port : 5432,
    
});

/* New client connection being established. */
pool.on("connect", (client) => {
    console.log(" Client connection successfull.");
  });

  export const execQuery = async (query) => {
    const client = await pool.connect();
    const res = await client.query(query).catch((err) => {
        console.error(`[pg execQuery]: Error while executing Query`);
        console.error(`\n \"${query}\"`);
        console.log(err);
    });
    client.release();
    return res;
};

  
  /* Client errors if any */
  pool.on("error", (err, client) => {
    console.error("Error: ", err);
    process.exit(-1);
  });

  process.on("exit", () => pool.end());
  export default pool;