import modify from "../modify/modify.js";
import { execQuery } from "./connect.js";

 
 export async function getBanksForAutocompleteQuery(q,limit=100,offset=0){
    var query = "";
    if (!q) {
      query = `SELECT ifsc, branch, address, city, district, state, id, name from branches
                FULL OUTER JOIN banks on branches.bank_id = banks.id
                ORDER BY ifsc
                LIMIT ${limit ? limit : 100}
                OFFSET ${offset ? offset : 0};`;
    } else {
      const qParam = modify(q);
      query = `SELECT ifsc, branch, address, city, district, state, id, name from branches
                    FULL OUTER JOIN banks on branches.bank_id = banks.id
                    WHERE branch LIKE '%${qParam.toUpperCase()}%'  
                    ORDER BY ifsc 
                    LIMIT ${limit} 
                    OFFSET ${offset} ;`;
    }
      console.log(query);
    const result = await execQuery(query);
    return result && result.rows;
  }
  
  export async function getBanksForQuery(q, limit = 100, offset = 0 ) {
    let query;
  
    if (!q) {
      query = `SELECT ifsc, branch, address, city, district, state, id, name from branches
                FULL OUTER JOIN banks on branches.bank_id = banks.id
                ORDER BY ifsc
                LIMIT ${limit ? limit : 100}
                OFFSET ${offset ? offset : 0};`;
    } else {
      const qParam = modify(q);
  
      query = `SELECT ifsc, branch, address, city, district, state, id, name from branches, banks 
                            WHERE (branches.doc_vectors_branch @@to_tsquery('${qParam}') 
                                    OR  banks.doc_vectors @@to_tsquery('${qParam}'))
                            AND banks.id = branches.bank_id
                            ORDER BY ifsc
                            LIMIT ${limit}
                            OFFSET ${offset};
                  `;
    }
    console.log(query);
    const result = await execQuery(query);
    return result && result.rows;
  }

