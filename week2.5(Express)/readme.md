you need to create 4 routes (4 things hospital can do)

- GET : User can check how many kidneys they have and their health
- POST: User can add a new kidney
- PUT: User can replace a kidney
- DELETE: USer can remove a kidney

# Status code

- 200: Everything went fine
- 404: Doctor is not in the hospital
- 500: Mid surgery light went away
- 411: Inputs were incorrect wrong person came to surgery
- 403: You are not allowed in the hospital

<!-- Catch every path after files -->

app.get("/files/:fileName", function(req,res)){
const name = req.params.fileName
fs.readFile(name, "utf-8", function(err,data){
res.json({
data
})
})
}
