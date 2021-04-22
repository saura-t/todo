import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

const Leftpannel = ({selectedDate, setSelectedDate}) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="p-4">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker 
                label="Date"
                variant='inline'
                format="dd MMM, yyyy"
                value={selectedDate} 
                onChange={setSelectedDate} />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Leftpannel
