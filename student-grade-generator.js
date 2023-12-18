function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log('Ok');
        return;
    }

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    // Print the total demerit points
    console.log(`Points: ${demeritPoints}`);

    // Check if the driver's license should be suspended
    if (demeritPoints >= pointsThresholdForSuspension) {
        console.log('License suspended');
    }
}

// Example usage:
speedDetector(80);