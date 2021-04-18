import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { useState } from 'react'

const Leftpannel = ({searchTodo}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleOnChange = (Date) => {
        setSelectedDate(Date)

    //     var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    //     var date = Date.getDate() + " " + mon[Date.getMonth()] + ", " + Date.getFullYear()

    //    searchTodo({date})
    }

    return (
        <div className="p-4">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker 
                label="Date"
                variant='inline'
                format="dd MMM, yyyy"
                value={selectedDate} 
                onChange={handleOnChange} />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Leftpannel
