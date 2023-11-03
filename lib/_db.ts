const person = [
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
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      }
    ],
    total: '27.000.000'
  },
  {
    id: '2',
    name: 'Payroll Feb',
    recipients: [
      {
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
      {
        recipient: {
          id: '8',
          name: 'Tsunade'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      },
      {
        recipient: {
          id: '4',
          name: 'Nara Shikamaru'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      }
    ],
    total: '63.000.000'
  },
  {
    id: '3',
    name: 'Payroll Mar',
    recipients: [
      {
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
    ],
    total: '45.000.000'
  },
  {
    id: '4',
    name: 'Payroll April',
    recipients: [
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
      {
        recipient: {
          id: '8',
          name: 'Tsunade'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      },
      {
        recipient: {
          id: '4',
          name: 'Nara Shikamaru'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      }
    ],
    total: '36.000.000'
  },
  {
    id: '5',
    name: 'Payroll Mei',
    recipients: [
      {
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
    ],
    total: '45.000.000'
  },
  {
    id: '6',
    name: 'Payroll Jun',
    recipients: [
      {
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
    ],
    total: '45.000.000'
  },
  {
    id: '7',
    name: 'Payroll Jul',
    recipients: [
      {
        recipient: {
          id: '1',
          name: 'Uzumaki Naruto'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '9',
          name: 'Uchiha Madara'
        },
        description: 'Salary',
        discount: '10%',
        amount: '15.000.000',
        total: '13.500.000'
      },
      {
        recipient: {
          id: '7',
          name: 'Hinata'
        },
        description: 'Salary',
        discount: '10%',
        amount: '20.000.000',
        total: '18.000.000'
      },
      {
        recipient: {
          id: '8',
          name: 'Tsunade'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      },
      {
        recipient: {
          id: '4',
          name: 'Nara Shikamaru'
        },
        description: 'Bonus',
        discount: '10%',
        amount: '10.000.000',
        total: '9.000.000'
      }
    ],
    total: '63.000.000'
  },
]

export default { person, transactions }