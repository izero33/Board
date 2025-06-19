// ✅ index.js (Node.js 백엔드)
const express = require('express');
const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_19_21' });

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  user: 'board_user',
  password: 'board123',
  connectString: 'localhost/XE'
};

// ✅ 글 목록 + 페이징 API
app.get('/posts', async (req, res) => {
  const page = parseInt(req.query.page || '1');
  const perPage = 5;
  const offset = (page - 1) * perPage;

  const bindVars = {
    startRow: offset,
    endRow: offset + perPage
  };

  let conn;
  try {
    conn = await oracledb.getConnection(dbConfig);

    const countResult = await conn.execute(`SELECT COUNT(*) FROM board`);
    const totalCount = countResult.rows[0][0];

    const result = await conn.execute(
      `SELECT * FROM (
         SELECT t.*, ROWNUM AS rn FROM (
           SELECT * FROM board ORDER BY id DESC
         ) t
         WHERE ROWNUM <= :endRow
       )
       WHERE rn > :startRow`,
      bindVars
    );

    res.json({
      posts: result.rows,
      totalCount
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('DB 오류');
  } finally {
    if (conn) await conn.close();
  }
});

// ✅ 글 등록 API
app.post('/posts', async (req, res) => {
  const { title, content, writer } = req.body;
  let conn;
  try {
    conn = await oracledb.getConnection(dbConfig);
    await conn.execute(
      `INSERT INTO board (id, title, content, writer, reg_date)
       VALUES (board_seq.NEXTVAL, :title, :content, :writer, SYSDATE)`,
      { title, content, writer },
      { autoCommit: true }
    );
    res.send('저장 성공');
  } catch (err) {
    console.error(err);
    res.status(500).send('DB 오류');
  } finally {
    if (conn) await conn.close();
  }
});

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
