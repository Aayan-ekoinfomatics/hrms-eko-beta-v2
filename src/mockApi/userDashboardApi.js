const userDashboardData = {
    user_data: {
        user_name: 'Demo User',
        user_position: 'Backend Developer',
    },
    pageCardData: [
        {
            header: 'Leaves',
            duration: '0',
            duration_unit: 'days',
            content: [
                {name: 'Sick', duration: '0', out_of: '6', unit: 'days' },
                {name: 'Casual', duration: '0', out_of: '6', unit: 'days'},
                {name: 'Paid', duration: '0', out_of: '6', unit: 'days'},
            ],
        },
        {
            header: 'On Desk',
            duration: '1',
            duration_unit: 'days',
            content: [
                {name: 'WFO', duration: '0', out_of: '', unit: 'days'},
                {name: 'WFH', duration: '0', out_of: '', unit: 'days' },
            ],
        },
        {
            header: 'Overtime',
            duration: '0',
            duration_unit: 'hours',
            content: [
                {name: 'WFO', duration: '0', out_of: '', unit: 'hours'},
                {name: 'WFH', duration: '0', out_of: '', unit: 'hours' },
            ],
        },
        // {
        //     header: 'Clock-in/Clock-out',
        //     duration: '0',
        //     duration_unit: '',
        //     content: [
        //         {name: 'clocked-in', duration: '08:20 am'},
        //         {name: 'clocked-out', duration: '06:00 pm'},
        //     ],
        // },
    ]
};

export default userDashboardData