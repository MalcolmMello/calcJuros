type Props = {
    initialValue: number,
    monthly: number,
    months: number,
    contribution: number
}

export const Calc = ({initialValue, monthly, months, contribution}: Props) => {
    let invest = initialValue + (months*contribution)
    let count = invest*(1 + monthly/100)**months
    return count
}

