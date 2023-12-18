function calculateNetSalary(basicSalary, benefits) {
    // Tax rates from KRA website
    const PAYE_RATES = [
        { range: [0, 24000], rate: 0.1, deduction: 0 },
        { range: [24001, 32333], rate: 0.15, deduction: 2400 },
        { range: [32334, 40385], rate: 0.2, deduction: 4967 },
        { range: [40386, 54346], rate: 0.25, deduction: 8967 },
        { range: [54347, 73205], rate: 0.3, deduction: 13954 },
        { range: [73206, 1000000], rate: 0.35, deduction: 22006 },
    ];

    // NHIF and NSSF values
    const NHIF_RATE = 170;
    const NSSF_RATE = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let paye = 0;
    for (const rate of PAYE_RATES) {
        if (grossSalary >= rate.range[0] && grossSalary <= rate.range[1]) {
            paye = grossSalary * rate.rate - rate.deduction;
            break;
        }
    }

    // Calculate NHIF and NSSF
    const nhif = NHIF_RATE;
    const nssf = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - paye - nhif - nssf;

    // Display the results
    console.log('Gross Salary:', grossSalary);
    console.log('PAYE:', paye);
    console.log('NHIF:', nhif);
    console.log('NSSF:', nssf);
    console.log('Net Salary:', netSalary);
}

// Example usage:
calculateNetSalary(50000, 10000);