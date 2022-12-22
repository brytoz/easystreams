const express = require('express')
const cors = require('cors')
const axios = require('axios')

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const res = require('express/lib/response');

const PORT = 5000
const app = express()

// parse the application to json server
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


// Scrape the England Premier League table from the Sky Sports website
async function scrapeTableUsingPuppette() {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch({ headless: true });
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the Sky Sports website
  await page.goto('https://www.skysports.com/premier-league-table');
  // Wait for the page to fully load
  await page.waitForSelector('.standing-table__table');
  // Get the HTML of the page
  const html = await page.evaluate(() => document.body.innerHTML);
  // Close the browser
  await browser.close();
  // Parse the HTML using cheerio
  const $ = cheerio.load(html);
  // Initialize an array to store the table data
  const tableData = [];
  // Iterate over each row in the table
  $('.standing-table__table tbody tr').each((i, element) => {
    // Get the data for each cell in the row
    const team = $(element).find('.standing-table__cell--name div').text().trim();
    const played = $(element).find('.standing-table__cell--played').text().trim();
    const won = $(element).find('.standing-table__cell--won').text().trim();
    const drawn = $(element).find('.standing-table__cell--drawn').text().trim();
    const lost = $(element).find('.standing-table__cell--lost').text().trim();
    const goalsFor = $(element).find('.standing-table__cell--for').text().trim();
    const goalsAgainst = $(element).find('.standing-table__cell--against').text().trim();
    const goalDifference = $(element).find('.standing-table__cell--gd').text().trim();
    const points = $(element).find('.standing-table__cell--pts').text().trim();
    // Push the data for the row into the array
    tableData.push({
      team,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalDifference,
      points,
    });
  });
  // Return the table data
  return tableData;
}

 
// Scrape the England Premier League table from the Sky Sports website
async function scrapeTabled() {
  // Make a request to the Sky Sports website
  const { data } = await axios.get('https://www.skysports.com/premier-league-table');
  // Parse the HTML using cheerio
  const $ = cheerio.load(data);
  // Initialize an array to store the table data
  const tableData = [];
  // Get the axis data for the table
  const axis = {
    played: $('.standing-table__axis-text--played').text().trim(),
    won: $('.standing-table__axis-text--won').text().trim(),
    drawn: $('.standing-table__axis-text--drawn').text().trim(),
    lost: $('.standing-table__axis-text--lost').text().trim(),
    goalsFor: $('.standing-table__axis-text--for').text().trim(),
    goalsAgainst: $('.standing-table__axis-text--against').text().trim(),
    goalDifference: $('.standing-table__axis-text--gd').text().trim(),
    points: $('.standing-table__axis-text--pts').text().trim(),
  };
  // Iterate over each row in the table
  $('.standing-table__table tbody tr').each((i, element) => {
    // Get the data for each cell in the row
    const team = $(element).find('.standing-table__cell--name div').text().trim();
    const played = $(element).find('.standing-table__cell--played').text().trim();
    const won = $(element).find('.standing-table__cell--won').text().trim();
    const drawn = $(element).find('.standing-table__cell--drawn').text().trim();
    const lost = $(element).find('.standing-table__cell--lost').text().trim();
    const goalsFor = $(element).find('.standing-table__cell--for').text().trim();
    const goalsAgainst = $(element).find('.standing-table__cell--against').text().trim();
    const goalDifference = $(element).find('.standing-table__cell--gd').text().trim();
    const points = $(element).find('.standing-table__cell--pts').text().trim();
    // Push the data for the row into the array
    tableData.push({
      team,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalDifference,
      points,
    });
  });
  // Return the table data and axis data
  return { axis, tableData };
}

 

// Scrape the England Premier League table from the Livescores website
async function scrapeTable() {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch({ headless: true });
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the Livescores website
  await page.goto('https://www.livescores.com/soccer/england/premier-league/');
  // Wait for the page to fully load
  await page.waitForSelector('.table-main');
  // Get the HTML of the page
  const html = await page.evaluate(() => document.body.innerHTML);
  // Close the browser
  await browser.close();
  // Parse the HTML using cheerio
  const $ = cheerio.load(html);
  // Initialize an array to store the table data
  const tableData = [];
  // Iterate over each row in the table
  $('.table-main tbody tr').each((i, element) => {
    // Get the data for each cell in the row
    const rank = $(element).find('.rank').text().trim();
    const team = $(element).find('.team').text().trim();
    const played = $(element).find('.played').text().trim();
    const won = $(element).find('.won').text().trim();
    const drawn = $(element).find('.draw').text().trim();
    const lost = $(element).find('.lost').text().trim();
    const goalsFor = $(element).find('.gf').text().trim();
    const goalsAgainst = $(element).find('.ga').text().trim();
    const goalDifference = $(element).find('.gd').text().trim();
    const points = $(element).find('.pts').text().trim();
    // Push the data for the row into the array
    tableData.push({
      rank,
      team,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalDifference,
      points,
    });
  });
  // Return the table data
  return tableData;
}
 

 
// Middleware function to handle the /football route
app.get('/football', async function football(req, res) {
  try {
    // Scrape the table data
    const tableDatas = await scrapeTable();

    if(tableDatas){
    // Send the table data as a response
    res.status(200).send(tableDatas);
    } else {
    res.status(400).send({status: "error"});
    }
  } catch (error) {
    // If there was an error, send a response with a status code of 500
    res.status(500).send(error.message);
  }
}
)



app.listen(PORT, console.log('connection started at port', PORT))