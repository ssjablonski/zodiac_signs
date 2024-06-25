const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS dates (date TEXT)")
    .catch((err) => console.error(err));
});

// Redis Client Setup
const redis = require("redis");
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/zodiac/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from dates");

  res.send(values.rows);
});

app.get("/zodiac/current", async (req, res) => {
  redisClient.hgetall("zodiac", (err, values) => {
    res.send(values);
  });
});

app.post("/zodiac", async (req, res) => {
  const birthDate = req.body.birthDate;

  const zodiacSign = getZodiacSign(birthDate);

  redisClient.hset("zodiac", birthDate, zodiacSign);
  redisPublisher.publish("insert", birthDate);
  pgClient.query("INSERT INTO dates(date) VALUES($1)", [birthDate]);

  res.send({ working: true });
});

function getZodiacSign(date) {
  const birthDate = new Date(date);
  const month = birthDate.getUTCMonth() + 1;
  const day = birthDate.getUTCDate();

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
    return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
    return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
    return "Capricorn";
}

app.listen(5000, (err) => {
  console.log("Listening");
});
