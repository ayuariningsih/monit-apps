const recipientOptions = [
  {id: '1', name: 'Uzumaki Naruto'},
  {id: '2', name: 'Uchiha Sasuke'},
  {id: '3', name: 'Sakura Haruno'},
  {id: '4', name: 'Nara Shikamaru'},
  {id: '5', name: 'Jiraiya'},
  {id: '6', name: 'Uchiha Itachi'},
  {id: '7', name: 'Hinata'},
  {id: '8', name: 'Tsunade'},
  {id: '9', name: 'Uchiha Madara'},
]

let transactions = [
  {
    id: '1',
    name: 'Payroll Jan',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
    ],
    total: 27000000
  },
  {
    id: '2',
    name: 'Payroll Feb',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
      {
        recipient_id: '8',
        recipient_name: 'Tsunade',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      },
      {
        recipient_id: '4',
        recipient_name: 'Nara Shikamaru',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      }
    ],
    total: 63000000
  },
  {
    id: '3',
    name: 'Payroll Mar',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
    ],
    total: 45000000
  },
  {
    id: '4',
    name: 'Payroll April',
    recipients: [
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
      {
        recipient_id: '8',
        recipient_name: 'Tsunade',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      },
      {
        recipient_id: '4',
        recipient_name: 'Nara Shikamaru',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      }
    ],
    total: 36000000
  },
  {
    id: '5',
    name: 'Payroll Mei',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
    ],
    total: 45000000
  },
  {
    id: '6',
    name: 'Payroll Jun',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
    ],
    total: 45000000
  },
  {
    id: '7',
    name: 'Payroll Jul',
    recipients: [
      {
        recipient_id: '1',
        recipient_name: 'Uzumaki Naruto',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '9',
        recipient_name: 'Uchiha Madara',
        description: 'Salary',
        discount: 10,
        amount: 15000000,
        total: 13500000
      },
      {
        recipient_id: '7',
        recipient_name: 'Hinata',
        description: 'Salary',
        discount: 10,
        amount: 20000000,
        total: 18000000
      },
      {
        recipient_id: '8',
        recipient_name: 'Tsunade',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      },
      {
        recipient_id: '4',
        recipient_name: 'Nara Shikamaru',
        description: 'Bonus',
        discount: 10,
        amount: 10000000,
        total: 9000000
      }
    ],
    total: 63000000
  },
]

export default { recipientOptions, transactions }