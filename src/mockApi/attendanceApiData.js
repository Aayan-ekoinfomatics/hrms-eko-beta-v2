const attendanceApiData = {
    header:[ {label: 'Date'}, {label: 'Check-In'}, {label: 'Check-Out'}, {label: 'Duration'}, {label: 'Status'}],
    header_obj: {date: 'Date', check_in: 'Check-In', check_out: 'Check-Out', duration: 'Duration', status: 'Status'},
    content: [
        {date: '01/12/2022', check_in: '8:13am', check_out: '5:45pm', status: 'WFO' , duration: '9 hrs 32 mins'},
        {date: '03/12/2022', check_in: '8:05am', check_out: '5:15pm', status: 'WFO' , duration: '9 hrs 10 mins'},
        {date: '04/12/2022', check_in: '8:17am', check_out: '5:35pm', status: 'WFO' , duration: '9 hrs 18 mins'},
        {date: '05/12/2022', check_in: '8:34am', check_out: '5:45pm', status: 'WFO' , duration: '9 hrs 09 mins'},
        {date: '06/12/2022', check_in: '9:15am', check_out: '6:35pm', status: 'WFH' , duration: '9 hrs 20 mins'},
        {date: '07/12/2022', check_in: '9:13am', check_out: '6:45pm', status: 'WFH' , duration: '9 hrs 32 mins'},
        {date: '08/12/2022', check_in: '8:05am', check_out: '2:25pm', status: 'Half Day' , duration: '6 hrs 20 mins'},
        {date: '09/12/2022', check_in: '8:05am', check_out: '5:25pm', status: 'WFO' , duration: '9 hrs 20 mins'},
        {date: '10/12/2022', check_in: ' - ', check_out: ' - ', status: 'Leave' , duration: ' - '},
        {date: '09/12/2022', check_in: '8:05am', check_out: '5:25pm', status: 'WFO' , duration: '9 hrs 20 mins'},
        {date: '09/12/2022', check_in: '8:05am', check_out: '5:25pm', status: 'WFO' , duration: '9 hrs 20 mins'},
        {date: '09/12/2022', check_in: '8:05am', check_out: '5:25pm', status: 'WFO' , duration: '9 hrs 20 mins'},
    ]
};

export default attendanceApiData