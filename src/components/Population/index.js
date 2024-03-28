import { Component } from "react";
import { CgRowFirst } from "react-icons/cg";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import '../Population/index.css'

class Population extends Component{
    state={
        fetechedData:[]
    }

    componentDidMount(){
        this.getData();
    }

    getData=async()=>{
        const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
        const result = await fetch(url);
        const fetechedData = await result.json();
        const formattedData = fetechedData.data.map(eachData =>({
            nation:eachData.Nation,
            year: eachData.Year,
            population: eachData.Population
        }));

        //console.log(formattedData);
        this.setState({fetechedData:formattedData});
        
    }
    render (){
        const {fetechedData} = this.state
        const DataFormatter = (number) => {
            if (number > 100000) {
              return `${(number / 100000).toString()}B`
            }
            return number.toString()
          }
        return(
            <div className="population-container">
                <div className="heading-container">
                    <h1 className="heading">Population</h1>
                    <CgRowFirst className="logo"/>
                </div>
                <ResponsiveContainer  className="bar-chart" width="60%" height={420}>
                <BarChart
                    data={fetechedData}
                    margin={{
                    top: 5,
                    }}
                >
                    <XAxis
                    dataKey="year"
                    tick={{
                        stroke: "white",
                        strokeWidth:1,
                    }}
                    />
                    <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                        stroke: "#ffffff",
                        strokeWidth: 1,
                    }}
                    />
                    <Legend
                    wrapperStyle={{
                        padding: 20,
                    }}
                    />
                    <Bar dataKey="population" name="Population" fill="#ffffff" barSize="20%" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Population;