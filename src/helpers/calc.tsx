type Props = {
    initialValue: number,
    monthly: number,
    months: number,
    contribution: number
}

type Props1 = {
    initialValue: number,
    months: number,
    contribution: number
}

type Props2 = {
    result: number,
    initialValue: number,
    months: number,
    contribution: number
}

export const Calc = ({initialValue, monthly, months, contribution}: Props) => {;
    let init = initialValue;

    for (let i=0;i<months;i++) {
        init = init + contribution
        init = init+((init)*(monthly/100))
    }

    console.log(init)

    return init 
}

export const Total = ({initialValue, months, contribution}: Props1) => {
    let total = parseFloat((initialValue + (contribution * months)).toFixed(2))

    return total
}

export const Taxes = ({result, initialValue, contribution, months}: Props2) => {
    let taxes = parseFloat((result - (initialValue + (contribution * months))).toFixed(2))

    return taxes
}

