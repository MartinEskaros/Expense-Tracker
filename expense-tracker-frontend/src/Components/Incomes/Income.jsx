import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const {addIncome, incomes,getIncomes} = useGlobalContext()
  useEffect(() =>{
      getIncomes()    //Initial Render
  }, [incomes,getIncomes])
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {incomes.map((income) => {
               const {_id,title,amount,date,category,description} = income;
               return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date}                    
                                category={category} 
                                indicatorColor="var(--color-green)"
                                
                            />
            })}

          </div>
        </div>

      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
h1{
  margin-left: 90px;
  font-size: 45px;
}
display: flex;
overflow: auto;
`;

export default Income