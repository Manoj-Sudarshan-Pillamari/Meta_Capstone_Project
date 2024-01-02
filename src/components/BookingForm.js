import { DatePicker, Form, InputNumber, Select } from 'antd';
import React, { useState } from 'react'
import "../App.css"
import backgroundImg from '../assets/food/food5.jpeg';

const BookingForm = () => {
    const [resDate, setResDate] = useState(null);
    const [resTime, setResTime] = useState(null);
    const [guests, setGuests] = useState(3);
    const [occasion, setOccasion] = useState('');

    // let newDate = new Date()
    // console.log(newDate)

    return (
        <div style={{ padding: "2% 25% 2% 25%", textAlignLast: "center"}} className="backgroundContainer">
            <Form layout="vertical" autoComplete="off" style={{borderRadius:"50px", padding:"2%", backgroundColor:"#a6deb3"}}>
                <Form.Item label="Select Date" rules={[{ required: true, message: 'Please select a date' }]} style={{fontWeight:"bold"}}>
                    <DatePicker
                        style={{
                            width: "50%",
                        }}
                        onChange={(e) => { e !== null ? setResDate(e.$d) : setResDate(null)}}
                    />
                </Form.Item>
                <Form.Item label="Select Time" rules={[{ required: true, message: 'Please select a time' }]} style={{fontWeight:"bold"}}>
                    <Select
                        style={{
                            width: "50%"
                        }}
                        onChange={(e) => { setResTime(e) }}
                        options={[
                            {
                                value: '17:00',
                                label: '17:00',
                            },
                            {
                                value: '18:00',
                                label: '18:00',
                            },
                            {
                                value: '19:00',
                                label: '19:00',
                            },
                            {
                                value: '20:00',
                                label: '20:00',
                            },
                            {
                                value: '21:00',
                                label: '21:00',
                            },
                            {
                                value: '22:00',
                                label: '22:00',
                                disabled: true,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Number of Guest(s)" rules={[{ required: true, message: 'Please number of guests' }]} style={{fontWeight:"bold"}}>
                    <InputNumber min={1} max={10} defaultValue={3} onChange={(e) => { setGuests(e) }} style={{ width: "50%" }} />
                </Form.Item>
                <Form.Item label="Select Occasion" style={{fontWeight:"bold"}}>
                    <Select
                        style={{
                            width: "50%"
                        }}
                        onChange={(e) => { setOccasion(e) }}
                        options={[
                            {
                                value: 'Birthday Celebration',
                                label: 'Birthday Celebration',
                            },
                            {
                                value: 'Anniversary',
                                label: 'Anniversary',
                            },
                            {
                                value: 'Engagement Celebration',
                                label: 'Engagement Celebration',
                            },
                            {
                                value: 'Graduation Party',
                                label: 'Graduation Party',
                            },
                        ]}
                    />
                </Form.Item>
                <button disabled={
                    resDate === null || resTime === null || guests === null || occasion.length === 0
                }
                    className={(resDate === null || resTime === null || guests === null || occasion.length === 0) ? 'disabledButton' : 'enableButton'}
                    onClick={()=>{console.log("CLICKEd")}}
                >Submit</button>
            </Form>
        </div>
    )
}

export default BookingForm