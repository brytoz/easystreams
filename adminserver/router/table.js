const router = require('express').Router()
const cheerio = require("cheerio")
const axios = require("axios")
const dotenv = require('dotenv')
dotenv.config()


// Middleware function to handle the /football route
router.get('/england-table-v2', async (req, res) => {
  const response = await axios('https://www.bbc.com/sport/football/tables')

  const html = await response.data
  const $ = cheerio.load(html)

  const allRows = $('table.gs-o-table > tbody.gel-long-primer > tr')
  const tableEnglandV2 = []

  allRows.each(async (index, element) => {
    const cells = $(element).find('td')
 
    const team = {
      position: $(cells[0]).text(),
      club: $(cells[2]).text(),
      played: $(cells[3]).text(),
      won: $(cells[4]).text(),
      drawn: $(cells[5]).text(),
      lost: $(cells[6]).text(),
      goalsFor: $(cells[7]).text(),
      goalsAgainst: $(cells[8]).text(),
      goalDifference: $(cells[9]).text(),
      points: $(cells[10]).text(),
    }
    tableEnglandV2.push(team)
  

    return tableEnglandV2
  })
  res.send(tableEnglandV2)
  
})

// Middleware function to handle the /england route
router.get('/england-table', async (req, res) => {
  const response = await axios(
    'https://www.livescores.com/football/england/premier-league/?tz=1',
  )
  // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/england/premier-league/?tz=1'`);

  const html = await response.data
  const $ = cheerio.load(html)

  const allRows = $('table.Wd.Xd > tbody > tr')
  const tableEngland = []

  allRows.each(async (index, element) => {
    const tds = $(element).find('td')
    const cells = $(element).find('td')
    const cellss = $(element).find('td > span')
 

    const team = {
      position: $(cellss[0]).text(),
      club: $(cells[1]).text(),
      played: $(cells[2]).text(),
      won: $(cells[3]).text(),
      drawn: $(cells[4]).text(),
      lost: $(cells[5]).text(),
      goalsFor: $(cells[6]).text(),
      goalsAgainst: $(cells[7]).text(),
      goalDifference: $(cells[8]).text(),
      points: $(cells[9]).text(),
    }
    tableEngland.push(team)

    
    return tableEngland
  })

  
  return res.send(tableEngland)
  

})

// Middleware function to handle the /italy route
router.get('/italy-table', async (req, res) => {
  const response = await axios(
    'https://www.livescores.com/football/italy/serie-a/?tz=1',
  )

  // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/italy/serie-a/?tz=1'`);

  const html = await response.data
  const $ = cheerio.load(html)
  //   const allRows = $('div.tableWrrouterer > div.ui-table > div.ui-table__body > div.ui-table__row')

  const allRows = $('table.Wd.Xd > tbody > tr')
  const tableItaliy = []
  allRows.each(async (index, element) => {
    const tds = $(element).find('td')
    const cells = $(element).find('td')
    const cellss = $(element).find('td > span')

    const team = {
      position: $(cellss[0]).text(),
      club: $(cells[1]).text(),
      played: $(cells[2]).text(),
      won: $(cells[3]).text(),
      drawn: $(cells[4]).text(),
      lost: $(cells[5]).text(),
      goalsFor: $(cells[6]).text(),
      goalsAgainst: $(cells[7]).text(),
      goalDifference: $(cells[8]).text(),
      points: $(cells[9]).text(),
    }
    tableItaliy.push(team)

    return tableItaliy
  })
  res.send(tableItaliy)
  
})

// Middleware function to handle the /spain route
router.get('/spain-table', async (req, res) => {
  const response = await axios(
    'https://www.livescores.com/football/spain/laliga-santander/?tz=1',
  )
  // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/spain/laliga-santander/?tz=1'`);

  const html = await response.data
  const $ = cheerio.load(html)

  const allRows = $('table.Wd.Xd > tbody > tr')
  const tableSpain = []

  allRows.each(async (index, element) => {
    const cells = $(element).find('td')
    const cellss = $(element).find('td > span')

    const team = {
      position: $(cellss[0]).text(),
      club: $(cells[1]).text(),
      played: $(cells[2]).text(),
      won: $(cells[3]).text(),
      drawn: $(cells[4]).text(),
      lost: $(cells[5]).text(),
      goalsFor: $(cells[6]).text(),
      goalsAgainst: $(cells[7]).text(),
      goalDifference: $(cells[8]).text(),
      points: $(cells[9]).text(),
    }
    tableSpain.push(team)

    return tableSpain
  })
  return res.send(tableSpain)
  
})

// Middleware function to handle the /germany route
router.get('/germany-table', async (req, res) => {
  const response = await axios(
    'https://www.livescores.com/football/germany/bundesliga/?tz=1',
  )
  // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/germany/bundesliga/?tz=1'`);

  const html = await response.data
  const $ = cheerio.load(html)

  const allRows = $('table.Wd.Xd > tbody > tr')
  const tableGermany = []

  allRows.each(async (index, element) => {
    const cells = $(element).find('td')
    const cellss = $(element).find('td > span')

    const team = {
      position: $(cellss[0]).text(),
      club: $(cells[1]).text(),
      played: $(cells[2]).text(),
      won: $(cells[3]).text(),
      drawn: $(cells[4]).text(),
      lost: $(cells[5]).text(),
      goalsFor: $(cells[6]).text(),
      goalsAgainst: $(cells[7]).text(),
      goalDifference: $(cells[8]).text(),
      points: $(cells[9]).text(),
    }
    tableGermany.push(team)

    return tableGermany
  })
  res.send(tableGermany)
  
})

// Middleware function to handle the /france route
router.get('/france-table', async (req, res) => {
  const response = await axios(
    'https://www.livescores.com/football/france/ligue-1/?tz=1',
  )
  // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/france/ligue-1/?tz=1'`);

  const html = await response.data
  const $ = cheerio.load(html)

  const allRows = $('table.Wd.Xd > tbody > tr')
  const tableFrance = []

  allRows.each(async (index, element) => {
    const cells = $(element).find('td')
    const cellss = $(element).find('td > span')

    const team = {
      position: $(cellss[0]).text(),
      club: $(cells[1]).text(),
      played: $(cells[2]).text(),
      won: $(cells[3]).text(),
      drawn: $(cells[4]).text(),
      lost: $(cells[5]).text(),
      goalsFor: $(cells[6]).text(),
      goalsAgainst: $(cells[7]).text(),
      goalDifference: $(cells[8]).text(),
      points: $(cells[9]).text(),
    }
    tableFrance.push(team)

    return tableFrance
  })
  res.send(tableFrance)
  
})

// Middleware function to handle the /holland route
router.get('/holland-table', async (req, res) => {
    const response = await axios(
      'https://www.livescores.com/football/holland/eredivisie/?tz=1',
    )
    // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/holland/eredivisie/?tz=1'`);
  
    const html = await response.data
    const $ = cheerio.load(html)
  
  const allRows = $('table.Wd.Xd > tbody > tr')
    const tableHolland = []
  
    allRows.each(async (index, element) => {
      const cells = $(element).find('td')
      const cellss = $(element).find('td > span')
  
      const team = {
        position: $(cellss[0]).text(),
        club: $(cells[1]).text(),
        played: $(cells[2]).text(),
        won: $(cells[3]).text(),
        drawn: $(cells[4]).text(),
        lost: $(cells[5]).text(),
        goalsFor: $(cells[6]).text(),
        goalsAgainst: $(cells[7]).text(),
        goalDifference: $(cells[8]).text(),
        points: $(cells[9]).text(),
      }
      tableHolland.push(team)
  
      return tableHolland
    })
    res.send(tableHolland)
    
  })
  
  
  // Middleware function to handle the /portugal route
router.get('/portugal-table', async (req, res) => {
    const response = await axios(
      'https://www.livescores.com/football/portugal/primeira-liga/?tz=1',
    )
    // const response = await axios(`${process.env.Page}'=https://www.livescores.com/football/portugal/primeira-liga/?tz=1'`);
  
    const html = await response.data
    const $ = cheerio.load(html)
  
  const allRows = $('table.Wd.Xd > tbody > tr')
    const tableHolland = []
  
    allRows.each(async (index, element) => {
      const cells = $(element).find('td')
      const cellss = $(element).find('td > span')
  
      const team = {
        position: $(cellss[0]).text(),
        club: $(cells[1]).text(),
        played: $(cells[2]).text(),
        won: $(cells[3]).text(),
        drawn: $(cells[4]).text(),
        lost: $(cells[5]).text(),
        goalsFor: $(cells[6]).text(),
        goalsAgainst: $(cells[7]).text(),
        goalDifference: $(cells[8]).text(),
        points: $(cells[9]).text(),
      }
      tableHolland.push(team)
  
      return tableHolland
    })
    res.send(tableHolland)
    
  })
    

module.exports = router
