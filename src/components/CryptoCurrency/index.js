import { Component } from "react";
import { GrCurrency } from "react-icons/gr";
import '../CryptoCurrency/index.css'

class CryptoCurrency extends Component{
    state={
        chartName:'',
        time:{},
        disclaimer:'',
        usd:{},
        eur:{},
        gbp:{},
    }
    componentDidMount(){
        this.getData();
    }
    getData=async()=>{
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const result = await fetch(url);
        const data = await result.json();
        const fetchedTime = {
            updated: data.time.updated,
            updatedISO: data.time.updatedISO,
            updateduk: data.time.updateduk,
        }
        
        const fetchedUSA = {
            code:data.bpi.USD.code,
            symbol: data.bpi.USD.symbol,
            rate: data.bpi.USD.rate,
            description: data.bpi.USD.description,
            rateFloat: data.bpi.USD.rate_float
        }

        const fetchedGBP = {
            code:data.bpi.GBP.code,
            symbol: data.bpi.GBP.symbol,
            rate: data.bpi.GBP.rate,
            description: data.bpi.GBP.description,
            rateFloat: data.bpi.GBP.rate_float
        }

        const fetchedEUR = {
            code:data.bpi.EUR.code,
            symbol: data.bpi.EUR.symbol,
            rate: data.bpi.EUR.rate,
            description: data.bpi.EUR.description,
            rateFloat: data.bpi.EUR.rate_float
        }

        
        const fetchedDisclaimer = data.disclaimer;
        
        
        this.setState({time:fetchedTime,disclaimer:fetchedDisclaimer,usd:fetchedUSA,gbp:fetchedGBP,eur:fetchedEUR});
        

    }
    render(){
        const{time,disclaimer,usd,eur,gbp} = this.state;
        return(
            <div className="crypto-currency-container">
                <div className="heading-container">
                    <h1 className="heading">CryptoCurrency</h1>
                    <GrCurrency className="logo"/>
                </div>
                <p>{disclaimer}</p>
                <p>Updated at {time.updated},{time.updatedISO},{time.updateduk}</p>
                <div className="card-container">
                    <div className="card"> 
                        <h1>{usd.code}</h1>
                        <p>{usd.symbol}</p>
                        <p>{usd.description}</p>
                        <p className="price">{usd.rateFloat}</p>
                    </div>
                    <div className="card">
                        <h1>{gbp.code}</h1>
                        <p>{gbp.symbol}</p>
                        <p>{gbp.description}</p>
                        <p className="price">{gbp.rateFloat}</p>
                    </div>
                    <div className="card">
                        <h1>{eur.code}</h1>
                        <p>{eur.symbol}</p>
                        <p>{eur.description}</p>
                        <p className="price">{eur.rateFloat}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CryptoCurrency;