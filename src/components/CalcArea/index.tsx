import * as C from './styles'
import { useState, useEffect } from 'react'
import { Calc } from '../../helpers/calc'
import { Total } from '../../helpers/calc'
import { Taxes } from '../../helpers/calc'


export const CalcArea = () => {
    const [initialValue, setInitialValue] = useState(0)
    const [contribution, setContribution] = useState(0)
    const [monthly, setMonthly] = useState(0)
    const [months, setMonths] = useState(12)

    const [result, setResult] = useState(0)
    const [total, setTotal] = useState(0)
    const [taxes, setTaxes] = useState(0)

    useEffect(()=>{
        setResult(Calc({initialValue, monthly, months, contribution}))
    },[initialValue, monthly, months, contribution])

    useEffect(()=>{
        setTotal(Total({initialValue, months, contribution}))
    }, [result])

    useEffect(()=>{
        setTaxes(Taxes({result, initialValue, contribution, months}))
    }, [result])

    return (
        <C.Container>
            <C.InitialValue>
                <C.DataArea>
                    <C.AreaInput>
                        <C.Area1>
                            <p>Valor Inicial</p>
                        </C.Area1>
                        <C.Area2>
                            <p>R$</p> <C.Input1 type="number" value={initialValue} onChange={e=>setInitialValue(parseInt(e.target.value))}/>
                        </C.Area2>
                    </C.AreaInput>
                    <C.AreaInput>
                        <C.Area1>
                            <p>Aporte/Retirada Mensal:</p>
                        </C.Area1>
                        <C.Area2>
                            <p>R$</p> <C.Input1 type="number" value={contribution} onChange={e=>setContribution(parseInt(e.target.value))}/>
                        </C.Area2>
                    </C.AreaInput>

                    <C.AreaInput>
                        <C.Area1>
                            <p>Taxa Mensal</p>
                        </C.Area1>
                        <C.Area2>
                            <p>%</p> <C.Input1 type="number" value={monthly} onChange={e=>setMonthly(parseFloat(e.target.value))}/>
                        </C.Area2>
                    </C.AreaInput>
                    <C.AreaInput>
                       <C.Area1>
                           <p>Meses</p>
                       </C.Area1>
                        <C.Area2>
                            <img src="https://img.icons8.com/ios/50/000000/calendar-31.png"/> <C.Input1 type="number" value={months} onChange={e=>setMonths(parseInt(e.target.value))}/>
                        </C.Area2>
                    </C.AreaInput>
                </C.DataArea>
                <C.ResultArea>
                    <C.Total>
                        <h1>Soma Total</h1>
                        <h2>R$ {result.toFixed(2)}</h2>
                    </C.Total>
                    <C.Results>
                        <p>Aplicação Inicial:</p>
                        <p>R$ {initialValue.toFixed(2)}</p>
                    </C.Results>
                    <C.Results>
                        <p>Total Aplicado:</p>
                        <p>R$ {total.toFixed(2)}</p>
                    </C.Results>
                    <C.Results>
                        <p>Juros Totais: </p>
                        <p>R$ {taxes}</p>
                    </C.Results>
                </C.ResultArea>
            </C.InitialValue>
        </C.Container>
    )
}