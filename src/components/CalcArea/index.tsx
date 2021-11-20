import * as C from './styles'
import { useState, useEffect } from 'react'
import { Calc } from '../../helpers/calc'


export const CalcArea = () => {
    const [initialValue, setInitialValue] = useState(0)
    const [contribution, setContribution] = useState(0)
    const [monthly, setMonthly] = useState(0)
    const [months, setMonths] = useState(12)

    const [result, setResult] = useState(0)

    useEffect(()=>{
        setResult(Calc({initialValue, monthly, months, contribution}))
    },[initialValue, monthly, months, contribution])

    return (
        <C.Container>
            <C.InitialValue>
                <C.DataArea>
                    <C.AreaInput>
                        Valor Inicial:
                        <C.Input1 type="number" value={initialValue} onChange={e=>setInitialValue(parseInt(e.target.value))}/>
                    </C.AreaInput>
                    <C.AreaInput>
                        Aporte/Retirada Mensal:
                        <C.Input1 type="number" value={contribution} onChange={e=>setContribution(parseInt(e.target.value))}/>
                    </C.AreaInput>
                    Taxas:
                    <C.AreaInput>
                        Mensal:
                        <C.Input1 type="number" value={monthly} onChange={e=>setMonthly(parseInt(e.target.value))}/>
                    </C.AreaInput>
                    <C.AreaInput>
                       Meses:
                        <C.Input1 type="number" value={months} onChange={e=>setMonths(parseInt(e.target.value))}/>
                    </C.AreaInput>
                </C.DataArea>
                <C.ResultArea>
                    <C.Total>
                        {result}
                    </C.Total>
                    <C.Initial>

                    </C.Initial>
                    <C.TotalAplications>

                    </C.TotalAplications>
                    <C.TotalTaxes>

                    </C.TotalTaxes>
                </C.ResultArea>
            </C.InitialValue>
        </C.Container>
    )
}