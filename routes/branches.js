import express from "express";
import { getBanksForQuery, getBanksForAutocompleteQuery, } from "./../pgsql/branches.js";


const router = express.Router();


router.use((req, res, next) => {
    next();
});


router.get("/autocomplete", async (req, res) => {
    const { q, limit, offset } = req.query;
    const branches = await getBanksForAutocompleteQuery(q, limit, offset);
    res.json(branches );
});


router.get("/", async (req, res) => {
    const { q, limit, offset } = req.query;
    const branches = await getBanksForQuery(q, limit, offset);
    res.json(branches );
});


export default router;