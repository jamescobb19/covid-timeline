const fs = require('fs');
const neatCsv = require('neat-csv')

infile = 'data.csv'
outfile = 'src/data.json'

console.log(`Reading data from ${infile}...`)
fs.readFile(infile, async (err, data) => {
  if (err) {
    console.log("An error occured while reading csv file.");
    console.error(err);
    process.exit(1);
  }

  const dataObject = await neatCsv(data);
  const mappedData = dataObject.map(item => {
    return {
      // Convert from dd/mm/yyyy to yyyy-mm-dd
      date: item["Date"].split('/').reverse().join('-'),
      description: item["Event"],
      title: item["Short Title"],
      type: item["Type"],
      secondaryTypes: item["Secondary Type"].split(","),
    }
  });
  const jsonData = JSON.stringify(mappedData);
  console.log(`Data mapped to object`);

  fs.writeFile(outfile, jsonData, 'utf8', async (err2) => {
    if (err2) {
      console.log("An error occured while writing JSON object to file.");
      console.log(err2);
      process.exit(1);
    }
    console.log(`Data saved to ${outfile}`);
  });
})
