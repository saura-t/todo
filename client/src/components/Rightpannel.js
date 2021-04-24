import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers'
import React, { useState } from 'react'

const Rightpannel = ({ onAdd }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('')
    const status = false

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Please add Title')
            return
        }

        var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        var date = selectedDate.getDate() + " " + mon[selectedDate.getMonth()] + ", " + selectedDate.getFullYear()

        var time = selectedDate.getHours() + ":" + selectedDate.getMinutes()

        onAdd({title, date, time, status})

        setTitle('')
        setSelectedDate(Date)
    }

    return (
        <form onSubmit={onSubmit} className="flex-row items-center px-12 py-8">
            <div className="flex-auto mt-10">
                <div className="flex-row">
                    <div className="flex">
                        <label className="px-2">Title</label>
                    </div>
                    <div className="flex px-2">
                        <input type="text" 
                        className=" font-sans text-lg px-2 py-1 border-b border-gray-400 w-full focus:border-none hover:border-black"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder='Title'>
                        </input>
                    </div>
                </div>
            </div>
            <div className="flex-auto flex-col my-10">
                <div className="flex">
                    <div className="flex-row mr-5 ml-2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                            label='Date'
                            variant="inline"
                            format="dd MMM, yyyy"
                            className="flex max-w-max"
                            value={selectedDate} 
                            onChange={setSelectedDate} />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="flex-row mr-2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <TimePicker
                            variant="inline"
                            label="Time"
                            className="flex max-w-max px-2" 
                            value={selectedDate} 
                            onChange={setSelectedDate} />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </div>
            <div>
                <input 
                className="w-6/12 bg-red-300 py-2 m-10 rounded-full cursor-pointer inline-block focus:outline-none"
                type="submit" 
                value="ADD" />
            </div>
        </form>
    )
}

export default Rightpannel
