const express = require("express");
const app = express();
const PORT = 8000;
app.get("/", (req: any, res: { send: (arg0: string) => any }) => res.send("Express + TypeScript Server"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
