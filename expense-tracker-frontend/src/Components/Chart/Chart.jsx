import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import moment from 'moment';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    // Sort incomes and expenses based on the date
    const sortedIncomes = incomes.sort((a, b) => moment(a.date).isBefore(b.date) ? -1 : 1);
    const sortedExpenses = expenses.sort((a, b) => moment(a.date).isBefore(b.date) ? -1 : 1);

    const incomeDates = sortedIncomes.map(inc => moment(inc.date).format('DD/MM/YYYY'));
    const expenseDates = sortedExpenses.map(exp => moment(exp.date).format('DD/MM/YYYY'));
    const allDates = Array.from(new Set([...incomeDates, ...expenseDates])).sort((a, b) => moment(a).isBefore(b) ? -1 : 1);

    const incomeData = sortedIncomes.map(inc => ({
        x: moment(inc.date).format('DD/MM/YYYY'),
        y: inc.amount
    }));
    const expenseData = sortedExpenses.map(exp => ({
        x: moment(exp.date).format('DD/MM/YYYY'),
        y: exp.amount
    }));

    const data = {
        labels: allDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    margin-top: 40px;
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart
