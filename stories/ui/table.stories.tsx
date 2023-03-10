import * as React from 'react';
import {Meta, Story} from '@storybook/react';
import {StyledTable, StyledThead, StyledTbody, StyledRow, StyledCell, StyledHeadCell} from '../../src/ui';

const meta : Meta = {
  title : 'ui/table',
  component: StyledTable
}

export default meta;



const TableTemplate : Story = args => <StyledTable {...args} />
const TableHeadTemplate : Story = args =>
  <StyledTable><StyledThead {...args}></StyledThead></StyledTable>
const TableHeadCellTemplate: Story = args => 
  <StyledTable><StyledThead><StyledHeadCell {...args} /></StyledThead></StyledTable>
const TableBodyTemplate : Story = args => 
  <StyledTable><StyledTbody {...args} /></StyledTable>
const TableRowTemplate : Story = args => 
  <StyledTable><StyledTbody><StyledRow {...args} /></StyledTbody></StyledTable>
const TableCellTemplate : Story = args => 
  <StyledTable><StyledTbody><StyledRow><StyledCell {...args}/></StyledRow></StyledTbody></StyledTable> 


export const TableContainer = TableTemplate.bind({});
export const TableHead = TableHeadTemplate.bind({});
export const TableHeadCell = TableHeadCellTemplate.bind({})
export const TableBody = TableBodyTemplate.bind({})
export const TableRow = TableRowTemplate.bind({})
export const TableCell = TableCellTemplate.bind({})

TableContainer.args = {
  display: 'flex',
  data: ['example']
}
TableHead.args = {
  hide : true
}
TableHeadCell.args = {}
TableBody.args = {}
TableRow.args = {
  height: '50px',
  bgColor: '#f6f9fc'
}

TableCell.args = {}


const TableWidthHeaderExample : Story = args =>
 <StyledTable {...args}>
    <StyledThead alignContent='left'>
      <StyledRow height='25px'>
        <StyledHeadCell>head 1</StyledHeadCell>
        <StyledHeadCell>head 2</StyledHeadCell>
      </StyledRow>
    </StyledThead>
    <StyledTbody>
      <StyledRow height='40px' bgColor='#f6f9fc'>
        <StyledCell width='20%'>data 1</StyledCell>
        <StyledCell width='80%'>data 2</StyledCell>
      </StyledRow>
    </StyledTbody>
  </StyledTable> 

const TableWidthoutHeaderExample : Story = ({tableArgs, bodyArgs, rowArgs, cellArgs})=>
 <StyledTable {...tableArgs}>
    <StyledTbody {...bodyArgs}>
      <StyledRow {...rowArgs}>
        <StyledCell {...cellArgs} width='40%' >data 1</StyledCell>
        <StyledCell {...cellArgs} width='60%' >data 2</StyledCell>
      </StyledRow>
    </StyledTbody>
  </StyledTable> 

export const TableWithHeader = TableWidthHeaderExample.bind({})
export const TableWithoutHeader = TableWidthoutHeaderExample.bind({}) 


TableWithHeader.args = {}
TableWithoutHeader.args = {
  tableArgs : {},
  bodyArgs : {},
  rowArgs : {
    height: '45px',
    bgColor: '#f6f9fc',
    display: 'flex'
  },
  cellArgs: {
    
  }
}









