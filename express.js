const express = require('express');
const app = express();
const port = 8080;

// 'public'ディレクトリ内の静态ファイルをホストします
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});