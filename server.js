const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Bot de apelaciones activo.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor activo en el puerto ${PORT}`);
});
