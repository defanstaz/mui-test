import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  const [value, setValue] = React.useState(careers[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [rank, setRank] = React.useState(0);

  return (
    <div>
      
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setRank(newValue.rank);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setRank(newInputValue.rank);
        }}
        id="combo-box-demo"
        options={careers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Career Field" />}
      />
      <div>{`Location: ${value.location[0].area !== null ? `'${value.location[0].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[0].emp !== null ? `'${value.location[0].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[0].a_pct10 !== null ? `'${value.location[0].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[0].a_pct25 !== null ? `'${value.location[0].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[0].a_median !== null ? `'${value.location[0].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[0].a_pct75 !== null ? `'${value.location[0].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[0].a_pct90 !== null ? `'${value.location[0].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[1].area !== null ? `'${value.location[1].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[1].emp !== null ? `'${value.location[1].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[1].a_pct10 !== null ? `'${value.location[1].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[1].a_pct25 !== null ? `'${value.location[1].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[1].a_median !== null ? `'${value.location[1].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[1].a_pct75 !== null ? `'${value.location[1].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[1].a_pct90 !== null ? `'${value.location[1].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[2].area !== null ? `'${value.location[2].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[2].emp !== null ? `'${value.location[2].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[2].a_pct10 !== null ? `'${value.location[2].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[2].a_pct25 !== null ? `'${value.location[2].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[2].a_median !== null ? `'${value.location[2].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[2].a_pct75 !== null ? `'${value.location[2].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[2].a_pct90 !== null ? `'${value.location[2].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[3].area !== null ? `'${value.location[3].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[3].emp !== null ? `'${value.location[3].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[3].a_pct10 !== null ? `'${value.location[3].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[3].a_pct25 !== null ? `'${value.location[3].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[3].a_median !== null ? `'${value.location[3].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[3].a_pct75 !== null ? `'${value.location[3].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[3].a_pct90 !== null ? `'${value.location[3].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[4].area !== null ? `'${value.location[4].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[4].emp !== null ? `'${value.location[4].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[4].a_pct10 !== null ? `'${value.location[4].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[4].a_pct25 !== null ? `'${value.location[4].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[4].a_median !== null ? `'${value.location[4].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[4].a_pct75 !== null ? `'${value.location[4].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[4].a_pct90 !== null ? `'${value.location[4].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[5].area !== null ? `'${value.location[5].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[5].emp !== null ? `'${value.location[5].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[5].a_pct10 !== null ? `'${value.location[5].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[5].a_pct25 !== null ? `'${value.location[5].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[5].a_median !== null ? `'${value.location[5].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[5].a_pct75 !== null ? `'${value.location[5].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[5].a_pct90 !== null ? `'${value.location[5].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[6].area !== null ? `'${value.location[6].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[6].emp !== null ? `'${value.location[6].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[6].a_pct10 !== null ? `'${value.location[6].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[6].a_pct25 !== null ? `'${value.location[6].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[6].a_median !== null ? `'${value.location[6].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[6].a_pct75 !== null ? `'${value.location[6].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[6].a_pct90 !== null ? `'${value.location[6].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[7].area !== null ? `'${value.location[7].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[7].emp !== null ? `'${value.location[7].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[7].a_pct10 !== null ? `'${value.location[7].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[7].a_pct25 !== null ? `'${value.location[7].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[7].a_median !== null ? `'${value.location[7].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[7].a_pct75 !== null ? `'${value.location[7].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[7].a_pct90 !== null ? `'${value.location[7].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[8].area !== null ? `'${value.location[8].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[8].emp !== null ? `'${value.location[8].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[8].a_pct10 !== null ? `'${value.location[8].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[8].a_pct25 !== null ? `'${value.location[8].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[8].a_median !== null ? `'${value.location[8].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[8].a_pct75 !== null ? `'${value.location[8].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[8].a_pct90 !== null ? `'${value.location[8].a_pct90}'` : 'null'}`}</div>
      <hr></hr>
      <div>{`Location: ${value.location[9].area !== null ? `'${value.location[9].area}'` : 'null'}`}</div>
      <div>{`Total Employment: ${value.location[9].emp !== null ? `'${value.location[9].emp}'` : 'null'}`}</div>
      <div>{`Annual 10%: ${value.location[9].a_pct10 !== null ? `'${value.location[9].a_pct10}'` : 'null'}`}</div>
      <div>{`Annual 25%: ${value.location[9].a_pct25 !== null ? `'${value.location[9].a_pct25}'` : 'null'}`}</div>
      <div>{`Annual Median: ${value.location[9].a_median !== null ? `'${value.location[9].a_median}'` : 'null'}`}</div>
      <div>{`Annual 75%: ${value.location[9].a_pct75 !== null ? `'${value.location[9].a_pct75}'` : 'null'}`}</div>
      <div>{`Annual 90%: ${value.location[9].a_pct90 !== null ? `'${value.location[9].a_pct90}'` : 'null'}`}</div>
    </div>
  );

/*  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );*/
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const careers = [
  { label: 'Biomanufacturing Associate',
    rank: 1, 
    location: [
      {
        area: "Houston-The Woodlands-Sugar Land, TX",
        lat: 29.760427,
        lon: -95.369804,
        emp: 3130, 
        a_pct10: 29450, 
        a_pct25: 36940,
        a_median: 49480, 
        a_pct75: 60430, 
        a_pct90: 67060, 
        emp_per_k_jobs: 1.05, 
        loc_quot: 1.82, 
        median_house: 309900
      },
      {
        area: "Denver-Aurora-Lakewood, CO",
        lat: 39.739235,
        lon: -104.990250, 
        emp: 2440, 
        a_pct10: 25600, 
        a_pct25: 34070,
        a_median: 40750, 
        a_pct75: 54520, 
        a_pct90: 70480, 
        emp_per_k_jobs: 1.68, 
        loc_quot: 2.89, 
        median_house: 614800
      },
      {
        area: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",
        lat: 39.94296,
        lon: -75.15937,  
        emp: 2260, 
        a_pct10: 34890, 
        a_pct25: 40760,
        a_median: 51720, 
        a_pct75: 64100, 
        a_pct90: 79540, 
        emp_per_k_jobs: 0.84, 
        loc_quot: 1.45, 
        median_house: 324800
      },
      {
        area: "Seattle-Tacoma-Bellevue, WA(0042660)",
        lat: 47.60383,
        lon: -122.33006,  
        emp: 2110, 
        a_pct10: 35750, 
        a_pct25: 41160,
        a_median: 48960, 
        a_pct75: 60130, 
        a_pct90: 71790, 
        emp_per_k_jobs: 1.08, 
        loc_quot: 1.86, 
        median_house: 708400
      },
      {
        area: "Portland-Vancouver-Hillsboro, OR-WA",
        lat: 45.52025,
        lon: -122.67419,  
        emp: 2090, 
        a_pct10: 34250, 
        a_pct25: 38080,
        a_median: 45260, 
        a_pct75: 53330, 
        a_pct90: 64490, 
        emp_per_k_jobs: 1.83, 
        loc_quot: 3.16, 
        median_house: 549200
      },
      {
        area: "Dallas-Fort Worth-Arlington, TX",
        lat: 32.77627,
        lon: -96.79686,  
        emp: 1690, 
        a_pct10: 37040, 
        a_pct25: 55590,
        a_median: 69750, 
        a_pct75: 76350, 
        a_pct90: 80320, 
        emp_per_k_jobs: 0.47, 
        loc_quot: 0.81, 
        median_house:  345200
      },
      {
        area: "Pittsburgh, PA",
        lat: 32.99540,
        lon: -94.96577, 
        emp: 1670, 
        a_pct10: 32930, 
        a_pct25: 36820,
        a_median: 43960, 
        a_pct75: 52590, 
        a_pct90: 63210, 
        emp_per_k_jobs: 1.56, 
        loc_quot: 2.69, 
        median_house: 225000
      },
      {
        area: "Nashville-Davidson--Murfreesboro--Franklin, TN",
        lat: 36.16228,
        lon: -86.77430, 
        emp: 1200, 
        a_pct10: 32380, 
        a_pct25: 34840,
        a_median: 38770, 
        a_pct75: 46110, 
        a_pct90: 56290, 
        emp_per_k_jobs: 1.24, 
        loc_quot: 2.14, 
        median_house: 355400
      },
      {
        area: "Cleveland-Elyria, OH",
        lat: 41.49966,
        lon: -81.69368,  
        emp: 1100, 
        a_pct10: 27270, 
        a_pct25: 36260,
        a_median: 47710, 
        a_pct75: 60800, 
        a_pct90: 75780, 
        emp_per_k_jobs: 1.12, 
        loc_quot: 1.94, 
        median_house: 212900
      },
      {
        area: "Columbus, OH",
        lat: 39.96226,
        lon: -83.00071, 
        emp: 910, 
        a_pct10: 24360, 
        a_pct25: 34300,
        a_median: 40720, 
        a_pct75: 50570, 
        a_pct90: 67010, 
        emp_per_k_jobs: 0.89, 
        loc_quot: 1.54, 
        median_house: 286300
      }
    ]
  }/*,
  { label: 'Lab Technician', 
    location: [
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
    ]
  }/*,
  { label: 'Semiconductor Technician',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: 'Quality Assurance (Industrial)',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: 'Quality Assurance (Other)',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: "Millwright",
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: 'Welder',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: 'Electrician',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
  },
  { label: 'HVAC Technician',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
  },
  { label: 'Pipefitter',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: 'Derrick Operator',
    rank: 8,
    location: [
      {
        area: "Eastern New Mexico nonmetropolitan area",
        lat: 35.2693,
        lon: -104.93070563907837,
        emp: 510, 
        a_pct10: 36850, 
        a_pct25: 41790,
        a_median: 46140, 
        a_pct75: 50490, 
        a_pct90: 57920, 
        emp_per_k_jobs: 3.921, 
        loc_quot: 48.95, 
        median_house: 298700
      },
      {
        area: "West North Dakota nonmetropolitan area",
        lat: 48.06344643053042,
        lon: -103.06597602899295,
        emp: 500, 
        a_pct10: 35180, 
        a_pct25: 42120,
        a_median: 54790, 
        a_pct75: 62490, 
        a_pct90: 72820, 
        emp_per_k_jobs: 4.334, 
        loc_quot: 64.48, 
        median_house: 281600
      },
      {
        area: "Midland, TX",
        lat: 31.99737,
        lon: -102.07795, 
        emp: 470, 
        a_pct10: 35680, 
        a_pct25: 40780,
        a_median: 46000, 
        a_pct75: 51020, 
        a_pct90: 58350, 
        emp_per_k_jobs: 4.680, 
        loc_quot: 69.63, 
        median_house: 215600
      },
      {
        area: "Coastal Plains Region of Texas nonmetropolitan area",
        lat: 28.325086474614736,
        lon: -97.36117698050225,
        emp: 420, 
        a_pct10: 27510, 
        a_pct25: 30140,
        a_median: 36940, 
        a_pct75: 46940, 
        a_pct90: 53400, 
        emp_per_k_jobs: 2.912, 
        loc_quot: 43.33, 
        median_house: 252200
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      }
    ]
  },
  { label: 'Solar Photovoltaic Installers',
    location: [
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        city: "",
        state: "", 
        emp: , 
        a_pct10: , 
        a_pct10: ,
        a_pct10: , 
        a_pct10: , 
        a_pct10: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
    ]
  },
  { label: "Tool and Die Maker / Machinist", 
    location: [
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house: 
      },
      {
        area: "",
        lat:,
        lon: ,
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      },
      {
        area: "",
        lat:,
        lon: , 
        emp: , 
        a_pct10: , 
        a_pct25: ,
        a_median: , 
        a_pct75: , 
        a_pct90: , 
        emp_per_k_jobs: , 
        loc_quot: , 
        median_house:  
      }
    ]
  }*/
];
